import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

import { inject as service } from '@ember/service';

import { isAnyObjectValueBlank } from '../../javascript-helpers/validation';

export default Component.extend({
  session: service('session'),

  tagName: 'form',
  init() {
    this._super(...arguments);

    let model = {
      email: '',
      password: '',
    };
    this.changeset = new Changeset(
      model,
      lookupValidator(UserValidations),
      UserValidations,
    );
  },
  actions: {
    authenticate(changeset) {
      if (changeset.get('isValid') && !isAnyObjectValueBlank(changeset, 'email', 'password')) {
        let identification = changeset.get('email'),
            password = changeset.get('password');

        this.get('session').authenticate('authenticator:devise', identification, password)
        .catch((error) => {
          this.setProperties({
            responseMessage: error.errors ? error.errors[0] : 'There has been an unusual error. Please try to log in again',
            isSuccess: false
          })
        });
      } else {
        this.setProperties({
          responseMessage: 'Your data is not valid',
          isSuccess: false
        })
      }
    },
    clearForm(changeset) {
      return changeset.rollback();
    },
  },
});
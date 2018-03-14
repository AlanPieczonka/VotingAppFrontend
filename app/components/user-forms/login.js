import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

import { set } from '@ember/object';

import { isAnyObjectValueBlank } from '../../javascript-helpers/validation';

export default Component.extend({
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
        console.log('Changeset is valid, we can authenticate');
      } else {
        set(this, 'responseMessage', 'Your data is not valid');
        set(this, 'isSuccess', false);
      }
    },
    clearForm(changeset) {
      return changeset.rollback();
    },
  },
});

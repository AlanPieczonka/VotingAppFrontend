import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

import { inject as service } from '@ember/service';

import { isEveryValueFilled } from '../../javascript-helpers/validation';
import { setFailureResponse, setInvalidDataResponse, setNullDataResponse } from '../../javascript-helpers/responses';

export default Component.extend({
  tagName: 'form',
  
  session: service('session'),
  init() {
    this._super(...arguments);
    this.changeset = new Changeset(
      {
        email: '',
        password: ''
      },
      lookupValidator(UserValidations),
      UserValidations,
    );
  },
  actions: {
    authenticate(changeset) {
      const credentials = [
        changeset.get('email'), 
        changeset.get('password')
      ];

      if (changeset.get('isValid') && isEveryValueFilled(credentials)) {
        const [identification, password] = credentials;

        this.get('session')
        .authenticate('authenticator:devise', identification, password)
        .catch((error) => {
          setFailureResponse.call(this, error.errors[0]);
        });
      } else {
        setInvalidDataResponse.call(this);
      }
    },
    clearForm(changeset) {
      setNullDataResponse.call(this);
      return changeset.rollback();
    },
  },
});
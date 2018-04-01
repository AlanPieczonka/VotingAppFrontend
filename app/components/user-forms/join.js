import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

import { isEveryValueFilled } from '../../javascript-helpers/validation';
import { postData } from '../../javascript-helpers/network';
import { setSuccessResponse, setFailureResponse, setInvalidDataResponse } from '../../javascript-helpers/responses'; 


export default Component.extend({
  tagName: 'form',
  init() {
    this._super(...arguments);
    this.changeset = new Changeset(
      {
        email: '',
        password: '',
        password_confirmation: '',
      },
      lookupValidator(UserValidations),
      UserValidations,
    );
  },
  actions: {
    join(changeset) {
      const credentials = [
        changeset.get('email'), 
        changeset.get('password'), 
        changeset.get('password_confirmation')
      ];

      if (changeset.get('isValid') && isEveryValueFilled(credentials)) {
        const user = {
          email: credentials[0],
          password: credentials[1],
          password_confirmation: credentials[2],
        };

        postData('http://localhost:3000/auth', user)
        .then((data) => {
          data.status == 'success' ?
          setSuccessResponse.call(this, data.data.email) :
          setFailureResponse.call(this, data.errors.full_messages[0]);

          this.actions.clearForm(changeset);           
        })
        .catch(() => {
          setFailureResponse.call(this);
          this.actions.clearForm(changeset);
        });
      } else {
        setInvalidDataResponse.call(this)
      }
    },
    clearForm(changeset) {
      return changeset.rollback();
    },
  },
});

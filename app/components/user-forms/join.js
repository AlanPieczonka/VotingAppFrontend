import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

import { isAnyObjectValueBlank } from '../../javascript-helpers/validation';
import { postData } from '../../javascript-helpers/network';

export default Component.extend({
  tagName: 'form',
  init() {
    this._super(...arguments);
    let model = {
      email: '',
      password: '',
      password_confirmation: '',
    };
    this.changeset = new Changeset(
      model,
      lookupValidator(UserValidations),
      UserValidations,
    );
  },
  actions: {
    join(changeset) {
      if (changeset.get('isValid') && !isAnyObjectValueBlank(changeset, 'email', 'password', 'password_confirmation')) {

        const user = {
          email: changeset.get('email'),
          password: changeset.get('password'),
          password_registration: changeset.get('password_registration'),
        };

        postData('http://localhost:3000/auth', user)
        .then((data) => {
         
          if(data.status == 'success'){
            this.setProperties({
              responseMessage: `Your Account has been created. You can easily log in, ${data.data.email}`,
              isSuccess: true
            })
          } else {
            this.setProperties({
              responseMessage: `There has been an error: ${data.errors.full_messages[0] || "we cannot define the problem"}`,
              isSuccess: false,              
            })
          }
          this.actions.clearForm(changeset);           
        })
        .catch(() => {
          this.setProperties({
            responseMessage: 'There has been an unusual error. Please try again',
            isSuccess: false 
          })
          this.actions.clearForm(changeset);
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

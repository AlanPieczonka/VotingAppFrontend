import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { set } from '@ember/object';

const isBlank = object => {
  // to refactor
  let isBlank = false;
  [object.get('email'), object.get('password')].forEach(value => {
    if (value == '') {
      isBlank = true;
    }
  });
  return isBlank;
}

const postData = async (source, object) => { 
  let response = await fetch(source, {
    body: JSON.stringify(object),
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    method: 'POST'
  });
  let data = await response.json();

  return data;
}

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
      if (changeset.get('isValid') && !isBlank(changeset)) {

        const user = {
          email: changeset.get('email'),
          password: changeset.get('password'),
          password_registration: changeset.get('password_registration'),
        };
        
        postData('http://localhost:3000/auth', user)
        .then((data) => {
         
          if(data.status == 'success'){
            set(this, 'responseMessage', `Your Account has been created. You can easily log in, ${data.data.email}`);
            set(this, 'isSuccess', true);
          } else {
            set(this, 'responseMessage', `There has been an error: ${data.errors.full_messages[0] || "we cannot define the problem"}`);
            set(this, 'isSuccess', false);
          }

          this.actions.clearForm(changeset);           
        })
        .catch(() => {
          set(this, 'responseMessage', 'There has been an unusual error. Please try again');
          set(this, 'isSuccess', false);
          this.actions.clearForm(changeset);
        });
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

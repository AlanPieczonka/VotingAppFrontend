import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

function isBlank(object) {
  // to refactor
  let isBlank = false;
  [object.get('email'), object.get('password')].forEach(value => {
    if (value == '') {
      isBlank = true;
    }
  });
  return isBlank;
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
        fetch('http://localhost:3000/auth', {
          body: JSON.stringify(user),
          headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
          },
          method: 'POST', // *GET, PUT, DELETE, etc.
        })
        .then((response) => console.log(response))
        .fetch((error) => console.error(error));
      } else {
        console.log('Changeset is not valid, we cannot register the user');
      }
    },
    clearForm(changeset) {
      return changeset.rollback();
    },
  },
});

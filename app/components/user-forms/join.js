import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';

function isBlank(object){ // to refactor 
  let isBlank = false;
    [object.get('email'), object.get('password')].forEach((value) => {
      if(value == ''){
        isBlank = true;
      }
    })
    return isBlank;
}

export default Component.extend({
  tagName: 'form',
  init(){
    this._super(...arguments);
    let model = {
      email: '',
      password: '',
      password_confirmation: ''
    }
    this.changeset = new Changeset(model, lookupValidator(UserValidations), UserValidations);    
  },
  actions: {
    join(changeset){
      if(changeset.get('isValid') && !isBlank(changeset)){
        console.log('We can register the user')
      } else {
        console.log('Changeset is not valid, we cannot register the user')
      }
    },
    clearForm(changeset){
      return changeset.rollback();
    }
  }
});

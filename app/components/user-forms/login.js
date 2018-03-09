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
      password: ''
    }
    this.changeset = new Changeset(model, lookupValidator(UserValidations), UserValidations);    
  },
  actions: {
    authenticate(changeset){
      if(changeset.get('isValid') && !isBlank(changeset)){  
        console.log('Changeset is valid, we can authenticate')
      } else {
        console.log('Changeset is not valid, no authentication');
      }
    },
    clearForm(changeset){
      return changeset.rollback();
    }
  }
});

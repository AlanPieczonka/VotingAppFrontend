import Component from '@ember/component';
import UserValidations from '../../validations/user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { get } from '@ember/object';

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
      console.log(`Is changeset valid? ${get(changeset, 'isValid')}`);
    },
    clearForm(changeset){
      return changeset.rollback();
    }
  }
});

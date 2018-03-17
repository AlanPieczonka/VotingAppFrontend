import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    saveChanges(){
      this.model.save().then(() => {
          this.transitionToRoute('authenticated.user', this.model);
      });
    }
  }
});

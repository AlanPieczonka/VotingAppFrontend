import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  actions: {
    authenticate(){
      console.log('Authenticate action');
    },
    clearForm(){
      console.log('Clear form action');
    }
  }
});

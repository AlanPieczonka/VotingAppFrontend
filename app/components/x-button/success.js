import Component from '@ember/component';

const SuccessButton = Component.extend({
  tagName: 'span',
  /*
  tagName: "button",
  classNames: ['btn', 'btn-primary'],
  type: "button",
  */
  click(){
    return this.get('onClick')();
  }
});

SuccessButton.reopenClass({
  positionalParams: ["text"]
})

export default SuccessButton;
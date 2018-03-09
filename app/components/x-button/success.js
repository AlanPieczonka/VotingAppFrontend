import Component from '@ember/component';

const SuccessButton = Component.extend({
  tagName: 'span'
  /*
  tagName: "button",
  classNames: ['btn', 'btn-primary'],
  type: "button",
  */
});

SuccessButton.reopenClass({
  positionalParams: ["text"]
})

export default SuccessButton;
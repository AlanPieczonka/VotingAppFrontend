import Component from '@ember/component';

const DangerButton = Component.extend({
  tagName: 'span',
});

DangerButton.reopenClass({
  positionalParams: ["text", "model"],
})

export default DangerButton;
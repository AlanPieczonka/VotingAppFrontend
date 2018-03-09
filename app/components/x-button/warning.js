import Component from '@ember/component';

const WarningButton = Component.extend({
  tagName: 'span',
});

WarningButton.reopenClass({
  positionalParams: ["text"]
})

export default WarningButton;
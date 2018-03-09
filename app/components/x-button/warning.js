import Component from '@ember/component';

const WarningButton = Component.extend({
  tagName: 'span',
  click(){
    return this.get('onClick')();
  }
});

WarningButton.reopenClass({
  positionalParams: ["text"]
})

export default WarningButton;
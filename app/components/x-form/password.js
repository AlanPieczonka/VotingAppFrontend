import Component from '@ember/component';

const PasswordComponent = Component.extend({
  tagName: 'div',
  classNames: ['form-group']
});

PasswordComponent.reopenClass({
  positionalParams: ['value', 'label']
})

export default PasswordComponent;

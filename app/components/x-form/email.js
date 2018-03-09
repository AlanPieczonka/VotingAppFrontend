import Component from '@ember/component';

const EmailComponent = Component.extend({
  tagName: 'div',
  classNames: ['form-group']
});

EmailComponent.reopenClass({
  positionalParams: ['value']
})

export default EmailComponent;

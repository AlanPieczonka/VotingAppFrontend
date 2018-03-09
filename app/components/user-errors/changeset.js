import Component from '@ember/component';

const UserErrorsChangeset = Component.extend({})

UserErrorsChangeset.reopenClass({
  positionalParams: ['errors']
})

export default UserErrorsChangeset;
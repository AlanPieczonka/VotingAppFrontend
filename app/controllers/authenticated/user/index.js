import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { setFailureResponse } from '../../../javascript-helpers/responses';

export default Controller.extend({
  user: alias('model'),
  session: service(),
  isAuthorized: computed('user.id', function() {
      let userID = this.get('user').get('id'),
          currentUserID = this.get('session.data.authenticated.account.data.id');

    return userID == currentUserID ? true : false;
  }),
  actions: {
    deleteAccount(model) {
      const data = localStorage.getItem('ember_simple_auth-session');
      this.get('session')
        .invalidate(data)
        .then(() => {
          model.deleteRecord();
          model.get('isDeleted');
          model.save();
        })
        .then(() => this.transitionToRoute('index'))
        .catch(() => {
          setFailureResponse.call(this);
        });
    }
  }
});

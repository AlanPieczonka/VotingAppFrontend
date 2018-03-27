import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['navbar navbar-expand-lg navbar-light bg-light'],

  session: service(),
  currentUser: service('current-user'),
  actions: {
    invalidateSession() {
      const data = localStorage.getItem('ember_simple_auth-session'); // or just const data = this.get('session')???

      return this.get('session').invalidate(data);
    }
  }
});

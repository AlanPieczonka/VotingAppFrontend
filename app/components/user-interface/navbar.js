import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['navbar navbar-expand-lg navbar-light bg-light'],
  notifications: service('notification-messages'),

  session: service(),
  currentUser: service('current-user'),
  actions: {
    invalidateSession() {
      const data = localStorage.getItem('ember_simple_auth-session'); // or just const data = this.get('session')???

      return this.get('session')
        .invalidate(data)
        .catch(() => {
          this.get('notifications').warning(
            'There has been an error. Please try again later',
            {
              autoClear: true,
              clearDuration: 4500
            }
          );
        });
    }
  }
});

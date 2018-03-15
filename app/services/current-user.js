import Ember from 'ember';
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  init() {
    this._super(...arguments);

    let userId = this.get('session.data.authenticated.account.data.id');
    if (!isEmpty(userId)) {
      return this.get('store')
        .findRecord('user', userId)
        .then(user => {
          this.set('user', user);
        });
    } else {
      return Ember.RSVP.resolve();
    }
  }
});

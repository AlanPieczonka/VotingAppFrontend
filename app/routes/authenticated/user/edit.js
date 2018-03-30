import Route from '@ember/routing/route';

import Changeset from 'ember-changeset';
import UserValidations from '../../../validations/user';
import lookupValidator from 'ember-changeset-validations';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  notifications: service('notification-messages'),
  model() {
    let model = this.modelFor('authenticated.user'),
        modelID = model.get('id'),
        currentUserID = this.get('session.data.authenticated.account.data.id')


    if (modelID == currentUserID) {
      return new Changeset(
        model,
        lookupValidator(UserValidations),
        UserValidations
      );
    } else {
      this.transitionTo('index');
      this.get('notifications').error('You are not allowed to enter this page', {
        autoClear: true,
        clearDuration: 2500
      });
    }
  },
});

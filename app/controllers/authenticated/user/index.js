import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { setFailureResponse } from '../../../javascript-helpers/responses';

export default Controller.extend({
  session: service(),
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
    },
  },
});

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  session: service(),
  actions: {
    deleteAccount(model) {
      const data = localStorage.getItem('ember_simple_auth-session');
      get(this, 'session')
        .invalidate(data)
        .then(() => {
          model.deleteRecord();
          model.get('isDeleted');
          model.save();
        })
        .then(() => this.transitionToRoute('index'))
        .catch(err => console.error(err)); // TO DO: Inform the user about the problem
    },
  },
});

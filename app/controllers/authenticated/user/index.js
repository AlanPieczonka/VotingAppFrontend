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
        .catch((err) => {
          const responseMessage = err.message || "There has been an error, please try again later";
          this.setProperties({
            responseMessage,
            isSuccess: false
          })
        });
    },
  },
});

import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

import { get } from '@ember/object';

export default Controller.extend({
  changeset: alias('model'),
  actions: {
    saveChanges() {
      if (get(this, 'changeset').get('isPristine')) {
        this.transitionToRoute('authenticated.user', get(this, 'changeset'));
      } else if (get(this, 'changeset').get('isValid')) {
        get(this, 'changeset')
          .save()
          .then(() => {
            this.transitionToRoute(
              'authenticated.user',
              get(this, 'changeset')
            );
          })
          .catch(() => {
            this.setProperties({
              responseMessage: "There has been an error. Please try again later",
              isSuccess: false
            })
          })
      } else {
        this.setProperties({
          responseMessage: 'Your data is not valid',
          isSuccess: false
        });
      }
    },
    rollback(changeset) {
      changeset.rollback();
      return this.transitionToRoute('authenticated.user', changeset);
    }
  }
});

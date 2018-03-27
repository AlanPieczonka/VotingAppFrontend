import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  changeset: alias('model'),
  actions: {
    saveChanges() {
      if (this.get('changeset').get('isPristine')) {
        this.transitionToRoute('authenticated.user', this.get('changeset'));
      } else if (this.get('changeset').get('isValid')) {
        this.get('changeset')
          .save()
          .then(() => {
            this.transitionToRoute(
              'authenticated.user',
              this.get('changeset')
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

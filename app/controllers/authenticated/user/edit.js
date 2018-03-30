import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  changeset: alias('model'),
  actions: {
    saveChanges(changeset) {
        const isValid = changeset.get('isValid'),
              isPristine = changeset.get('isPristine');

      if(isPristine && isValid){
        return this.transitionToRoute('authenticated.user', changeset);
      }
      else if (isValid) {  
        changeset
          .save()
          .then(() => {
            this.transitionToRoute(
              'authenticated.user',
              changeset
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
      this.setProperties({
        responseMessage: null,
        isSuccess: null
      });
      return this.transitionToRoute('authenticated.user', changeset);
    }
  }
});

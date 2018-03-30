import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { setFailureResponse, setInvalidDataResponse, setNullDataResponse } from '../../../javascript-helpers/responses';

export default Controller.extend({
  changeset: alias('model'),
  actions: {
    saveChanges(changeset) {
        const isValid = changeset.get('isValid'),
              isPristine = changeset.get('isPristine');

      if(isPristine && isValid){
        this.transitionToRoute('authenticated.user', changeset);
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
            setFailureResponse.call(this);
          })
      } else {
        setInvalidDataResponse.call(this);
      }
    },
    rollback(changeset) {
      changeset.rollback();
      setNullDataResponse.call(this);
      return this.transitionToRoute('authenticated.user', changeset);
    }
  }
});

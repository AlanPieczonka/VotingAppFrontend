import Route from '@ember/routing/route';

import Changeset from 'ember-changeset';
import UserValidations from '../../../validations/user';
import lookupValidator from 'ember-changeset-validations';

export default Route.extend({
  model() {
    let model = this.modelFor('authenticated.user');
    return new Changeset(
      model,
      lookupValidator(UserValidations),
      UserValidations,
    );
  },
});

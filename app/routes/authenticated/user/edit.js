import Route from '@ember/routing/route';

export default Route.extend({
  // return model for upper route, remember to use changeset
  model(){
    return this.modelFor('authenticated.user');
  },
});

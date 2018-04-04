import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('join');
  this.route('login');
  this.route('about');
  this.route('authenticated', function() {
    this.route('user', { path: 'user/:user_id'}, function() {
      this.route('edit');
    });
  });
  this.route('not-found', { path: '/*path' });

  this.route('error');
});

export default Router;

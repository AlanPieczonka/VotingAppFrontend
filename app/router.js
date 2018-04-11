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

    this.route('polls', function() {
      this.route('new');
    });
  });
  this.route('polls', { path: 'polls/:poll_id' });
  
  this.route('not-found', { path: '/*path' });
  this.route('error');
});

export default Router;

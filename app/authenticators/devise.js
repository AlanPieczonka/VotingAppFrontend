import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
    serverTokenEndpoint: 'http://localhost:3000/auth/sign_in',
});
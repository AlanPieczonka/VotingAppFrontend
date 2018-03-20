import {
  validatePresence,
  validateLength,
  validateFormat,
  validateConfirmation
} from 'ember-changeset-validations/validators';
 
export default {
  email: [
    validatePresence(true),
    validateLength({ min: 4 }),
    validateFormat({ type: 'email' })
  ],
  password: [
    validatePresence(true),
    validateLength({ min: 6 })
  ],
  password_confirmation: [
    validatePresence(true),
    validateLength({ min: 6}),
    validateConfirmation({ on: 'password' })
  ],
  name: [
    validateLength({ max: 20 })
  ],
  nickname: [
    validateLength({ max: 20 })
  ],
  image: [
    validateLength({ max: 100 })
  ]
};
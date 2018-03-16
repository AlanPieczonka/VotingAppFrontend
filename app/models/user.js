import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  uid: attr('string'),
  email: attr('string'),
  name: attr('string'),
  nickname: attr('string'),
  image: attr('string')
});

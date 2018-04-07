import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  uid: attr('string'),
  email: attr('string'),
  name: attr('string'),
  nickname: attr('string'),
  image: attr('string'),

  polls: hasMany('poll')
});

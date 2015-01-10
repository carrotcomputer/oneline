import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  full_name: DS.attr('string'),
  creation_date: DS.attr('string')
});

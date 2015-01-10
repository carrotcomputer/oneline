import DS from 'ember-data';

export default DS.Model.extend({
  initatorId: DS.attr('string'),
  recipientId: DS.attr('string'),
  currrentState: DS.attr('string'),
  stateInitator: DS.attr('string'),
  creationDate: DS.attr('string'),
  lastUpdateDate: DS.attr('string')
});

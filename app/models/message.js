import DS from 'ember-data';

export default DS.Model.extend({
  conversation: DS.belongsTo('conversation'),
  user: DS.belongsTo('user'),
  messageContent: DS.attr('string'),
  sendDate: DS.attr('date')
});

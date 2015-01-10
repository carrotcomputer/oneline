import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  emailAddress: DS.attr('string'),
  password: DS.attr('string'),
  fullName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  profileImage: DS.attr('string'),
  avaliabilityState: DS.attr('string'),
  statusMessage: DS.attr('string'),
  accountState: DS.attr('string'),
  signupDate: DS.attr('string')
});

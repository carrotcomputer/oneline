import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  reply: false,
  actions: {
    startReply: function(){
      this.set('reply', true);
    },
    cancelReply: function(){
      this.set('reply', false);
    }
  }
});

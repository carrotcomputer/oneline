import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToConversation: function(){
      this.transitionToRoute('conversation');
    }
  }
});

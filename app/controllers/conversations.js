import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    goToConversation: function(){
      this.transitionToRoute('conversation');
    }
  }
});

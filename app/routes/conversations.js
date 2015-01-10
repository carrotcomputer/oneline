import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('conversation');
  },
  renderTemplate: function(controller){
    this.render();
    controller.set('controllers.application.background', 'white-background');
  }
});

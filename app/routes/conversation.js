import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(controller){
    this.render();
    
    controller.set('controllers.application.background', 'emerald-green-background');
  }
});

import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Route.extend({
  afterModel: function(){
    var superThis = this;
    
    var success = function(message) {
        alert(message);
    }

    var failure = function() {
        alert("Error calling Hello Plugin");
    }

    //hello.greet("World", success, failure);
    
    superThis.transitionTo('conversations');
  }
});

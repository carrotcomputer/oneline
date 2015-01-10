import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  backgroundColour: function(){
    var colourCounter = this.get('colourCounter');
    console.log(colourCounter);
    
    switch(colourCounter){
      case "red":
        this.set('colourCounter', "blue");
        return "salmon-red-background";
      break;
      
      case "blue":
        this.set('colourCounter', "purple");
        return "deep-blue-background";
      break;
      
      case "purple":
        this.set('colourCounter', "red");
        return "velvet-purple-background";
      break;
    }
  }.property().volatile(),
  colourCounter: "red",
  actions: {
    goToConversation: function(){
      this.transitionToRoute('conversation');
    }
  }
});

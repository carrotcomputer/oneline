export default function(){
  this.transition(
    this.toRoute('conversation'),
    this.use('toRight')
  );
  
  this.transition(
    this.toRoute('conversations'),
    this.use('toLeft')
  );
};
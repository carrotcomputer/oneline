export default function(){
  this.transition(
    this.toRoute('conversation'),
    this.use('toLeft')
  );
  
  this.transition(
    this.toRoute('conversations'),
    this.use('toRight')
  );
}
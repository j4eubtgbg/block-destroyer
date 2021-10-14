class Block{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var option={
        isStatic:true
        };       
    this.body = Bodies.rectangle(x,y,50,50,option);
  World.add(world,this.body);
    }  

    
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,50,50);
      }


}
class Box extends BaseClass {
    constructor(x, y){
      super(x,y,30, 40);
      this.width = 30;
      this.height = 40;
      this.Visibility = 255;
  
    }
    display(){
      console.log(this.body.speed);
     if(this.body.speed<7){
      super.display();
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink")
      rect(pos.x, pos.y, this.width, this.height);
     } 
     else{
       World.remove(world, this.body);
       push();  
       this.Visibility = this.Visibility-5;
       fill(255, this.Visibility);
       pop();

      }
     
    }
  
  };
  
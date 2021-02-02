const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var a;
//var circles=[];

var ground, polygon, polygonImg;
var base1, base2, base3;
var slingshot;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29;
var woodIMG;

function preload() {
 polygonImg = loadImage("polygon.png");
 woodIMG = loadImage("woody.jpg");
}
function setup() {
  createCanvas(1000,500);
 engine = Engine.create();
 world = engine.world;
  stroke(255)
  
 //camera=new Camera(width/2,height/2,0.5);
//camera.on();
  //a=height;
//circles.push(width/2)

ground = new Ground(500, 490, 1000, 20);
base1 = new Ground(840, 160, 200, 15);
base2 = new Ground(590, 240, 200, 15);
base3 = new Ground(330, 360, 240, 15);

b1 = new Box(815, 122);
b2 = new Box(845, 122);
b3 = new Box(875, 122);
b4 = new Box(845, 70);
b5 = new Box(530, 190);
b6 = new Box(560, 190);
b7 = new Box(590, 190);
b8 = new Box(620, 190);
b9 = new Box(650, 190);
b10 = new Box(560, 150);
b11 = new Box(590, 150);
b12 = new Box(620, 150);
b13 = new Box(590, 110);
b14 = new Box(250, 310);
b15 = new Box(280, 310);
b16 = new Box(310, 310);
b17 = new Box(340, 310);
b18 = new Box(370, 310);
b19 = new Box(400, 310);
b20 = new Box(430, 310);
b21 = new Box(280, 270);
b22 = new Box(310, 270);
b23 = new Box(340, 270);
b24 = new Box(370, 270);
b25 = new Box(400, 270);
b26 = new Box(310, 230);
b27 = new Box(340, 230);
b28 = new Box(370, 230);
b29 = new Box(340, 190);


polygon = new Polygon(110, 260, 60, 60);
//imageMode(CENTER);
//image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

slingshot = new SlingShot(polygon.body, {x:110,y:260});
// slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(woodIMG);  
 
 Engine.update(engine);
 
  //a=a-1;
 // camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}

  
 /* for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
  circles.push(camera.position.x+width/2)
}*/


ground.display();
 //camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 
 //ellipse(50, 250, 30);
 
 base1.display();
 base2.display();
 base3.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 b25.display();
 b26.display();
 b27.display();
 b28.display();
 b29.display();
 slingshot.display();
 polygon.display();
 drawSprites();
}

/* function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
   }
  }
} */

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
   if(keyCode === 32){
      slingshot.attach(polygon.body);
   }
}

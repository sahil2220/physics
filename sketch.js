const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine
var world
function setup() {
  createCanvas(400,400);
  
 engine=Engine.create();
 world=engine.world;

 var balloption={
   restitution:1,
   density:6

 }
 ball=Bodies.circle(200,30,30,balloption)
 World.add(world,ball);

 var option={
   isStatic:true
 }
 ground=Bodies.rectangle(200,350,400,20,option);
 World.add(world,ground)


 Engine.run(engine)
}

function draw() {
  background(0);
  ellipseMode(CENTER)  
  ellipse(ball.position.x,ball.position.y,50)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
}
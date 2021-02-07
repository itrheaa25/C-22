
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 var groundOptions ={
   isStatic: true
 }
  ground = Bodies.rectangle(400,350,800,20,groundOptions);
  World.add(world,ground);

 var ballOptions={
   restitution:0.7
 }
  ball = Bodies.circle(100,200,7.5,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  


  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,7.5,7.5);
}
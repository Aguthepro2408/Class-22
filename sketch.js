const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup() {
 var canvas= createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ballOptions={restitution:1};
 ball=Bodies.circle(200,250,25,ballOptions);
World.add(world,ball);
var groundOptions={isStatic:true};
ground=Bodies.rectangle(200,350,200,20,groundOptions);
World.add(world,ground);
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  

ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,25);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,220,20);
  drawSprites();
}
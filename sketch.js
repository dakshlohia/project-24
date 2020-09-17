
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,200,15,15);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	ball1.display();
	
  
  drawSprites();
 
}




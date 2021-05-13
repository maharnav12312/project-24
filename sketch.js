
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  plane1=new Plane(600,height,1200,20);
  hammer1=new Hammer(600,300);
  iron1=new Iron(600,400);
  rubber1=new Rubber(700,400);
  stone1 = new Stone(800,400);
  

}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  
plane1.display();
hammer1.display();
iron1.display();
rubber1.display();
stone1.display();
  drawSprites();
 
}




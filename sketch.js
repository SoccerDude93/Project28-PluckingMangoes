
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var throwStone;

function preload()
{
	
}


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
	
	
	
	tree = new Tree (400,25, 400, 575);

	ground = new Ground (400, 590, 800, 20);
	
	stone = new Stone (100,425,50,50);
	
	boy = new Boy (100, 400, 125, 250);
	
	mango1 = new Mango (550, 85, 50, 50);
	mango2 = new Mango (650, 200, 50, 50);
	mango3 = new Mango (450, 200, 50, 50);
	mango4 = new Mango (675, 130, 50, 50);
	mango5 = new Mango (630, 60, 50, 50);
	mango6 = new Mango (585, 150, 50, 50);
	mango7 = new Mango (500, 250, 50, 50);
	mango8 = new Mango (725, 250, 50, 50);
	mango9 = new Mango (530, 200, 50, 50);

	print(mango1.position);

	throwStone = new ThrowStone (stone.body,{x:125, y:470});
}



function draw() {
  rectMode(CENTER);
  background(200);

  Engine.update(engine);

  
  tree.display();
 
  ground.display();
  
  stone.display();
  
  boy.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  throwStone.display();

  
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    throwStone.fly();
}
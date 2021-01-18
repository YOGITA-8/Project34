//constants (NameSpacing)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//our own new engine and world
var engine,world;

//variables
var bgImage;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16,
block17,block18,block19,block20,block21,block22,block23,block24,
block25;
var monster;
var hero;
var fly;



function preload() {
  
  //loading bgImage for background
  bgImage = loadImage ("GamingBackground.png");

}



function setup() {

  createCanvas(1365, 624);

	//create engine and add the world to the engine
  engine = Engine.create();
  world = engine.world;

  //creating ground
  ground = new Ground(566,490,1130,20);

  //creating 1st column of blocks
  block1 = new Block(600, 100, 65, 65);
  block2 = new Block(600, 100, 65, 65);
  block3 = new Block(600, 100, 65, 65);
  block4 = new Block(600, 100, 65, 65);
  block5 = new Block(600, 100, 65, 65);
  block6 = new Block(600, 100, 65, 65);
  block7 = new Block(600, 100, 65, 65);

  //creating 2nd column of blocks
  block8 = new Block(700, 100, 65, 65);
  block9 = new Block(700, 100, 65, 65);
  block10 = new Block(700, 100, 65, 65);
  block11 = new Block(700, 100, 65, 65);
  block12 = new Block(700, 100, 65, 65);
  block13 = new Block(800, 100, 65, 65);
  block14 = new Block(700,100,65,65);

  //creating 3rd column of blocks
  block15 = new Block(800, 100, 65, 65);
  block16 = new Block(800, 100, 65, 65);
  block17 = new Block(800, 100, 65, 65);
  block18 = new Block(800, 100, 65, 65);
  block19 = new Block(800, 100, 65, 65);
  block20 = new Block(800, 100, 65, 65);
  block21 = new Block(900, 100, 65, 65);
  block22 = new Block(900, 100, 65, 65);

  //creating 4th column of blocks
  block23 = new Block(900, 100, 65, 65);
  block24 = new Block(900, 100, 65, 65);
  block25 = new Block(900, 100, 65, 65);

  //creating monster
  monster = new Monster(1100,100,250)

  //creating hero
  hero = new Hero(300,420,250);

  //creating fly and attaching it to hero
  fly = new Fly(hero.body, { x: 500, y: 50 });

}



function draw() {

  //update Engine with engine
  Engine.update(engine);

  //adding background
  background(bgImage);

  //displaying objects......
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display()
  block5.display()
  block6.display()
  block7.display()

  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()

  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()

  block22.display()
  block23.display()
  block24.display()
  block25.display()
 
  monster.display();

  hero.display();

  fly.display();

}



//function to move hero with mouse 
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}



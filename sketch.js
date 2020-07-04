const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;

var player1, player2, player3;

var bg1;

var plane, bomb;

var ground;

var help, help1;

function preload(){
    bg1 = loadImage("images/bg1.jpg");
    bg2 = loadImage("images/bg2.jpg");
    help = loadImage("images/Help.png");
}
function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 790, 1600, 80);
  bomb = new Bomb(1320, 140, 30, 30);
  plane = new Plane(1320, 140, 100, 80);
  player1 = new Player3(200, 640, 100, 180);
  player2 = new Player1(280, 660, 100, 140);
  player3 = new Player2(140, 660, 140, 140);

  help1 = createSprite(800, 500, 50, 10);
  help1.addImage("help!", help);
  help1.visible = false;
}

function draw() {
  background(bg1);  
  Engine.update(engine);
  player1.display();
  player2.display();
  player3.display();
  plane.display();
  bomb.display();

  if(bomb.y === 700){
    help1.visible = true;
  }
  drawSprites();
}
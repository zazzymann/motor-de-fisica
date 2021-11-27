const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var mouse,rope,ground,lado,lado2,lado3,ground2;
var ball = []

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 680, 3000, 20);
  lado = new Ground(2500,350, 20, 700);
  lado2 = new Ground(200,350, 20, 700);
  ground2 = new Ground(1500, 10, 3000, 20);
  

  mouse = new Mouse(mouseX,mouseY,250);


  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);




}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  lado.display();
  lado2.display();
  ground2.display();

  mouse.display();
  
  stroke("Black");
  textSize(50);
  text("Jogo ant estresse",900,100);

}


const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
function setup() {
  createCanvas(1200,600);
  Engine.create();
  World = Engine.World();
  ground = new Ground(width/2,height,width,5)
  World.add(World.object)
}

function draw() {
  background(5,5,5);  
  ground.display();
  drawSprites();
}
function setup() {
  createCanvas(1200,600);
  ground=new Ground(width/2,height,width,5)
}

function draw() {
  background(5,5,5);  
  ground.display();
  drawSprites();
}
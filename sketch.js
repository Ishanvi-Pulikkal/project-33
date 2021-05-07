const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var snowfallBg;
var snowDrops = [];
var rand;
var maxSnowDrops = 300;

function preload(){
  snowfallBg = loadImage("snow.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1350,750);

  if(frameCount % 150 === 0){

    for(var i=0; i<maxSnowDrops; i++){
        snowDrops.push(new snowDrop(random(0,1350), random(0,1350)));
    }

}

  
}

function draw() {
  Engine.update(engine);
  background(snowfallBg);  

  for(var i = 0; i<maxSnowDrops; i++){
    snowDrops[i].display();
    snowDrops[i].UpdateY();
    
}
  drawSprites();
  
}
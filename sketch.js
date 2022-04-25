var trex, trex_running;
var ground, groundimg;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundimg = loadImage("ground2.png");

}

function setup() 
{
  createCanvas(600,200);

  trex = createSprite(110,160,20,10);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.7

  edges =  createEdgeSprites();
  
  ground = createSprite(300,190,600,20);
  ground.addImage("ground",groundimg);
  ground.x = ground.width / 2;
  
}

function draw() 
{
background(51);

drawSprites();

trex.collide(ground);

if(keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY += 0.5;

ground.velocityX = -4;

if(ground.x < 0){
  ground.x = ground.width / 2;
}
}


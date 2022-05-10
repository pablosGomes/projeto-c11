var ship,shipImg;
var sea,seaImg;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
 
}

function setup(){
  createCanvas(400,400);
  //criando sprite mar
  sea = createSprite(400,200)
  sea.addImage(seaImg);
  sea.scale=0.3;
  sea.velocityX=-5;
  
  //criando sprite navio
  ship = createSprite(130,200,40,40);
  ship.addAnimation("navioNavegando",shipImg);
  ship.scale=0.25;
}

function draw() {
  background("blue");
  
  //reconfigurando o plano de fundo para a posição x original 
  if (sea.x<0){
    sea.x=400;
  }
  drawSprites();
  

  }



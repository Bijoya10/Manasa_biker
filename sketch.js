var start=2;
var player;
var ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var lives=2;

function preload(){
  playerImg=loadAnimation("sprites/tile000.png");
  coinImg=loadImage("sprites/coin.png");
}

function setup() {
  createCanvas(800,400);
 player= createSprite(200, 320, 50, 50);
 player.addAnimation("cycing",playerImg);
 player.scale=0.2;
 ground=createSprite(200,360,800,20);
 

}

function draw() {
  background(0);  
  if(gameState===1){
    ground.velocityX=-3;
    if(ground.x<0){
      ground.x=400;
    }
    if(keyIsDown(32)){
      player.velocityY=-10;
     
    }
    player.velocityY=player.velocityY+2;
    obstacles();
    coin();
  }else{
    ground.velocityX=0;

  }

  
  
 
  player.collide(ground);
  console.log(player.y)
 
  drawSprites();
}
function obstacles(){
  if(frameCount%60===0){
  var obstacle=createSprite(800,320,30,30);
  obstacle.shapeColor="red";
  obstacle.velocityX=-2;

  }
}
function coin(){
  if(frameCount%200===0){
    var coin=createSprite(800,230,15,15);
    coin.velocityX=-2;
    coin.shapeColor="gold";
    coin.addImage(coinImg);
    coin.scale=0.01;
  
  }
}
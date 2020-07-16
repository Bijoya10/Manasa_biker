var start=2;
var player;
var ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var lives=2;
var obstaclesGroup;
var coinGroup;
var score=0;
var win;

function preload(){
  playerImg=loadAnimation("sprites/tile000.png");
  coinImg=loadImage("sprites/coin.png");
}

function setup() {
  createCanvas(800,400);
 player= createSprite(200, 320, 50, 50);
 player.addAnimation("cycing",playerImg);
 player.scale=0.2;
 win=createSprite(600,300,10,10);
 win.visible=false;
 ground=createSprite(200,360,800,20);
 obstaclesGroup=new Group();
  coinGroup=new Group();
  textSize(30);
 
}

function draw() {
  background(0);  
  text("Score: "+score,600,50);
  if(gameState===1){
    ground.velocityX=-7;
    
    
    if(ground.x<0){
      ground.x=400;
    }
   
    if(keyIsDown(32)&& player.y>=310.5){
      player.velocityY=-30;
     
    }
    player.velocityY=player.velocityY+2;
    obstacles();
    coin();
    if(player.isTouching(coinGroup)){
      score=score+1;
      coinGroup.destroyEach();
    }
    if(score===1){
      gameState=2;
    }
if(player.isTouching(obstaclesGroup)){
  gameState=0;
}
  }else if(gameState===0){ 
    ground.velocityX=0;
   obstaclesGroup.setVelocityXEach(0);
   coinGroup.setVelocityXEach(0);
   obstaclesGroup.setLifetimeEach(-3);
   coinGroup.setLifetimeEach(-3);
   player.velocityY=0;
  }else if(gameState===2){
    player.velocityY=player.velocityY+2;
    win.visible=true;
    win.velocityX=-7 
    if(ground.x<0){
      ground.x=400;
    }                  
    if(player.isTouching(win)){
      ground.velocityX=0;
      win.velocityX=0
      obstaclesGroup.destroyEach();
      coinGroup.destroyEach();
      textSize(50);
      textFont("Georgia");
      fill(255);

      text("You WIN",400,200)
    }
  }

  
  
 
  player.collide(ground);
  console.log(player.y)
 
  drawSprites();
}
function obstacles(){
  if(frameCount%100===0){
  var obstacle=createSprite(800,320,30,30);
  obstacle.shapeColor="red";
  obstacle.velocityX=-15;
  obstacle.lifetime=400;
  obstaclesGroup.add(obstacle);

  }
}
function coin(){
  if(frameCount%200===0){
    var coin=createSprite(800,230,15,15);
    coin.velocityX=-5;
    coin.shapeColor="gold";
    coin.addImage(coinImg);
    coin.scale=0.01;
    coin.lifetime=400;
    coinGroup.add(coin);
  
  }
}
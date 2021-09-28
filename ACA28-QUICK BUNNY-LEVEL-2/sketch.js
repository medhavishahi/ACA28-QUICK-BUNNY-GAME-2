function preload() {
  //load game assets
 var snakeGroup;
}


function setup() {
  createCanvas(600,600);
  player= createSprite(40,500,30,30);
  snakeGroup=new Group();
  edges= createEdgeSprites()
  target=createSprite(560,40,30,30);
  obs1=createSprite(300,120,100,20);
  obs1.velocityX=5
  obs2=createSprite(300,190,100,20);
  obs2.velocityX=-7
  obs3=createSprite(300,290,100,20);
  obs3.velocityX=-9
  obs4=createSprite(300,390,100,20);
  obs4.velocityX=4
  obs5=createSprite(300,430,100,20);
  obs5.velocityX=-4
 

 
}

function draw() {
   
  if(keyDown("up")){
    player.y=player.y-5;
  }
  if(keyDown("down")){
    player.y=player.y+5;
  }
  if(keyDown("right")){
    player.x=player.x+5;
  }
  if(keyDown("left")){
    player.x=player.x-5;
  }

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  
  
  background("black");
  if (player.isTouching(obs1)){
    
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200);
   
  }
  if (player.isTouching(obs2)){
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200); 
  }
  if (player.isTouching(obs3)){
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200);
   
  }
  if (player.isTouching(obs4)){
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200); 
  }
  if (player.isTouching(obs5)){
    player.x=40;
    player.y=500;
    text("YOU LOSE",200,200);
   
  }
  if (player.isTouching(target)){
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    text("YOU WIN",200,200);
   
  }
  target.shapeColor="blue";
  obs1.shapeColor="red";
  obs2.shapeColor="red"; 
  obs3.shapeColor="red"; 
  obs4.shapeColor="red"; 
  obs5.shapeColor="red"; 
   
generateSnakes();
  for(var i=0; i<(snakeGroup).length;i++){
    var temp=(snakeGroup).get(i);
    if(player.isTouching(temp)){
      player.x=40
      player.y=500;
  }
}
  
 
  drawSprites();
}
function generateSnakes(){
  if(frameCount %30===0){
    var snake= createSprite(600,random(70,520),random(30,120),5);
    snake.shapeColor="green";
    snake.velocityX=random(-4,4);
    snake.velocityY=random(-4,4);
    snakeGroup.add(snake);
  }
}
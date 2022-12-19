var chickenimg,creeperimg,creepersGroup;
var chicken,Ground,play = true;

function preload(){
    chickenimg = loadImage("chicken.png");
    creeperimg = loadImage("creeper.webp");
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    Ground = createSprite(200,190,windowWidth*2,10);
    chicken = createSprite(30,160,20,20)
    chicken.addImage(chickenimg);
    chicken.scale = 0.1;
    creepersGroup = new Group();
}

function draw() {
    background(280,280,280);
    chicken.collide(Ground);
    if(chicken.y>150 && play == 1){
        chicken.velocityY=0;
        if(keyDown("space")){
            chicken.velocityY = -20;
          }
    }
    if(chicken.y<150){
        chicken.velocityY+=2;
    }
    if (chicken.collide(creepersGroup)){
        play =false;
    }
    if(!play){
       creepersGroup.setVelocityEach(0,0);
      chicken.velocity = (0,0);
    }
    creepers();
    drawSprites();
   
}
function creepers() {
    if (frameCount % 70 === 0) {
      var creeper = createSprite(windowWidth,150,40,10);
      creeper.addImage(creeperimg);
      creeper.scale = 0.05;
      creeper.velocityX = -12;
      creeper.lifetime =windowWidth;
      creeper.depth = chicken.depth;
      chicken.depth = chicken.depth + 1;
      creepersGroup.add(creeper);
    }
  }
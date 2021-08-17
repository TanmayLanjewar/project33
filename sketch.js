function preload(){
backgroundImage=loadImage("snow2.jpg")
snowmanImage=loadImage("snowman.png")


}
function setup() {
  createCanvas(800,600);
 snowman=createSprite(500,550)
 snowman.addImage(snowmanImage)
 snowman.scale=0.3
 ground=createSprite(400,590,800,10)
 ground.visible=false
}
function draw() {

  background(backgroundImage);  
  if(keyDown("space")){
    snowman.velocityY=-5

  }
  snowman.velocityY+=0.5
  snowman.collide(ground)
  drawSprites();
  
  
}
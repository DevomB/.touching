var rectMoving, rectFixed


function setup() {
  createCanvas(800,400);
  rectFixed=createSprite(400, 200, 50, 50);
  rectMoving=createSprite(100, 200, 50, 50);
  rectMoving.shapeColor="green";
  rectFixed.shapeColor="green";
}

function draw() {
  background(0, 0, 0);

  rectMoving.x=mouseX;
  rectMoving.y=mouseY;

if(rectMoving.x-rectFixed.x<rectFixed.width/2+rectMoving.width/2||rectFixed.x-rectMoving.x<rectFixed.width/2+rectMoving.width/2
  ||rectMoving.y-rectFixed.y<rectFixed.width/2+rectMoving.width/2||rectFixed.y-rectMoving.y<rectFixed.width/2+rectMoving.width/2){
    //3rd for bottom 4th for top 1st right 2nd for left
  rectMoving.shapeColor="green";
  rectFixed.shapeColor="green";


}
else{
  rectMoving.shapeColor="green";
  rectFixed.shapeColor="green";


}

  drawSprites();
}
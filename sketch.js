var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 60, 100);
  wall=createSprite(1500,200,thickness,height/2);

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2 ){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180){
    bullet.shapeColor="white";
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor="white";
  }
  if(deformation<100){
    bullet.shapeColor="white";
  }
  }

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness* thickness * thickness);
  if(damage>10)
  {
    wall.shapeColor="red";
  }
  if(damage<10)
  {
    wall.shapeColor="green";
  }
}
  


  drawSprites();
}

function hasCollided (lbullet,lwall){
bulletRightEdge=lbullet+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>wallLeftEdge){
  return true
}
return false;
} 
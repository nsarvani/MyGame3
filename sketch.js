
var antelopef1, wolf1, bg;
var antelope, wolf;
var obstacle

function preload() 
{

  bg1 = loadImage("./images/bg.png");
  antelopef1=loadAnimation("./images/Antelope-1.png","./images/Antelope-2.png","./images/Antelope-3.png","./images/Antelope-4.png")
  wolf1 = loadAnimation("./images/Wolf-1.png","./images/Wolf-2.png","./images/Wolf-3.png","./images/Wolf-4.png","./images/Wolf-5.png","./images/Wolf-6.png","./images/Wolf-7.png","./images/Wolf-8.png","./images/Wolf-9.png","./images/Wolf-10.png")
  obstacle = loadImage("./images/obstacle.png")
}

function setup() 
{

  createCanvas(600,700);

  bg = createSprite(300,350,600,700);
  bg.addImage(bg1);
  bg.scale = 2.;
  bg.velocityY = 1;

  antelope= createSprite(300,100,0,0);
  antelope.addAnimation("antelopef1", antelopef1);

  wolf = createSprite(305,500, 50, 50);
  wolf.addAnimation("wolfy", wolf1);
  wolf.scale = 2;

}

function draw() 
{
  background(0); 
  
  if(bg.y > 450)
  {
    bg.y = 350;
  }

if (keyDown("up"))
{
  wolf.y -= 4;
}
if (keyDown("down"))
{
  wolf.y -= -4;
}
if (keyDown("left"))
{
  wolf.x -= 4;
}
if (keyDown("right"))
{
  wolf.x -= -4;
}

  drawSprites();
}
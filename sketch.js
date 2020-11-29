var santa,banta;

function setup() {
  createCanvas(800,400);
  santa=createSprite(100, 200, 50, 50);
  banta=createSprite(700,200,100,100);

  santa.shapeColor="orange";
  banta.shapeColor="green";
  
  santa.debug=true;
  banta.debug=true;

  santa.velocityX=6;
  banta.velocityX=-3;}

function draw() {
  background("black"); 

  bounceOff(santa,banta);

  drawSprites();

  /*fill("white");
  textSize(30);
  text("santa x "+santa.x,350,50)*/}


function bounceOff(g1,g2){

  if(g1.x-g2.x<g1.width/2+g2.width/2 &&
    g2.x-g1.x<g2.width/2+g1.width/2){
    g1.velocityX=g1.velocityX*(-1);
    g2.velocityX=g2.velocityX*(-1);}
}  
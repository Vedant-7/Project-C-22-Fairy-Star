var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
chrome://extensions
				 
function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	music    = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	music.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(300,600);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

	Engine.update(engine);

  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

	//write code to stop star in the hand of 

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyDown(RIGHT_ARROW)){
		fairy.velocityX = +6;
	}

	else if (keyDown(LEFT_ARROW)){
		fairy.velocityX = -6;
	}

	if (star.y>600){
		star.velociotyY = 0;
	}

	drawSprites();
}

































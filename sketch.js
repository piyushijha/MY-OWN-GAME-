var tina, tinaImg, tinaJump, tinaRImg;
var bg;
var crocodile, crocodileImg;
var crocodile2, crocodile2Img;
var crocodile3, crocodile3Img;
var swan, swanImg;
var eggs, eggsImg;
var instructions;
var crocodileGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  bg = loadImage("Forest.png")
  // tinaImg = loadAnimation("Tina_Left.png", "Tina_Right.png")
  // // crocodileImg = loadImage("Crocodile.png");
  // tinaRImg = loadImage("Tina_Right.png");
  // tinaJump = loadImage("Tina_Jump.png");
  crocodile2Img = loadImage("Baby_Crocodile2.png")
  crocodile3Img = loadImage("Baby_Crocodile3.png")
  swanImg = loadImage("Swan.png");
  eggsImg = loadImage("Eggs.png");
  instructions = loadImage("Instructions.png");


}


function setup() {
  createCanvas(1200, 600);
  swan = createSprite(1000, 200, 50, 50);
  swan.addImage("swan", swanImg);
  swan.scale = 0.4;
  //swan.debug = true;
  swan.setCollider("rectangle", 0, 0, 130, 100);

  /* crocodile = createSprite(700, 300, 50, 50);
   crocodile.addImage("crocodile", crocodileImg);
   crocodile.depth = tina.depth;
   crocodile.depth -= 1;
   crocodile.scale = 0.25; */

  crocodileGroup = new Group();

  eggs = createSprite(650, 450, 50, 50);
  eggs.addImage("swan", eggsImg);
  eggs.scale = 0.15;
  eggs.debug = true;


}


function draw() {
  background(bg);
  image(instructions, 0, 380, 210, 240);
  if (swan.isTouching(eggs)) {
    textSize(45)
    fill(0)
    stroke(255);
    textFont("Calibri");
    text("YOU WIN!",650, 350);
  }

  if (gameState === PLAY) {
    if (keyDown(RIGHT_ARROW)) {
      swan.x += 2;
    }

    if (keyDown(LEFT_ARROW)) {
      swan.x -= 2;
    }

    if (keyDown(UP_ARROW)) {
      swan.y -= 2;
    }

    if (keyDown(DOWN_ARROW)) {
      swan.y += 2;
    }

    spawnCrocodile();



    if (crocodileGroup.isTouching(swan)) {
      gameState = END;
    }

  }

  else if (gameState === END) {
    crocodileGroup.setVelocityXEach(0);
    crocodileGroup.setLifetimeEach(-1);

    textSize(45)
    fill(0)
    stroke(255)
    textFont("Calibri")
    text("YOU LOSE!", 650, 300)


  }




  drawSprites();
}

function spawnCrocodile() {
  if (frameCount % 120 === 0) {
    crocodile2 = createSprite(1080, 330, 50, 50);
    crocodile2.addImage("crocodile2", crocodile2Img);
    crocodile2.depth = swan.depth;
    crocodile2.depth -= 1;
    crocodile2.scale = 0.29;
    crocodile2.velocityX = -2;
    crocodile2.lifetime = 290;
    // crocodile2.debug = true;
    crocodile2.setCollider("rectangle", 0, 40, 220, 150);


    crocodile3 = createSprite(550, 275, 50, 50);
    crocodile3.addImage("crocodile3", crocodile3Img);
    crocodile3.depth = swan.depth;
    crocodile3.depth -= 1;
    crocodile3.scale = 0.20;
    crocodile3.velocityX = 2;
    crocodile3.lifetime = 290;
    //crocodile3.debug = true;
    crocodile3.setCollider("rectangle", 0, 40, 220, 100);


    crocodileGroup.add(crocodile2);
    crocodileGroup.add(crocodile3);

  }
}

// / - division
// % (modulo) - remainder
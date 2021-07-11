var canvas
var ground , groundImage
var mari,marioImage;

function preload(){
    groundImage=loadImage("ground.png")
    marioImage=loadAnimation("mario1.png","mario2.png")
}

function setup(){
    canvas=createCanvas(windowWidth,windowHeight)
    ground=createSprite(width/2,height,width,20)
    ground.addImage("ground",groundImage)
    ground.x=ground.width/2 
    mario=createSprite(50,height-100,20,20)

    mario.addAnimation ("mario",marioImage)
    mario.scale=0.6
}

function draw(){
    background ("pink");
    ground.velocityX=-70
    if(ground.x<500){
        ground.x = ground.width/2
    }
    drawSprites()
}

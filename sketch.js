var wall1,wall2;
var w1,w2,w3;
var bul1,bul2,bul3;
var t1,t2,t3,s1,s2,s3;
var d1,d2,d3;
var w;

function setup(){
    createCanvas(1275,577.5);
    wall1=createSprite(637.5,192.8,1275,15);
    wall2=createSprite(637.5,385.6,1275,15);

    w1=createSprite(1250,96.4,10,165);
    w1.width=random(5,30);
    t1=w1.width;

    w2=createSprite(1250,288.2,10,165);
    w2.width=random(5,30);
    t2=w2.width;

    w3=createSprite(1250,481,10,165);
    w3.width=random(5,30);
    t3=w3.width;

    bul1=createSprite(50,96.4,50,15);
    bul1.velocityX=random(40,100);
    s1=bul1.velocityX;

    bul2=createSprite(50,288.2,50,15);
    bul2.velocityX=random(40,100);
    s2=bul2.velocityX;
    
    bul3=createSprite(50,481,50,15);
    bul3.velocityX=random(40,100);
    s3=bul3.velocityX;

    w=random(10,75);
}

function draw(){
    background(0);
    drawSprites();

    collide1(w1,bul1);
    collide2(w2,bul2);
    collide3(w3,bul3);

    d1=s1*w/t1;
    d2=s2*w/t2;
    d3=s3*w/t3;

    console.log(d1,d2,d3);
          
}


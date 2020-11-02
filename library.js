function collide1(p1,p2){
    if(p1.x-p2.x<=p1.width/2+p2.width/2){
        p2.velocityX=0;
        if(d1<150){
          p1.shapeColor="green";
        }
        if(d1>150 && d1<275){
           p1.shapeColor="yellow"; 
        }
        if(d1>275){
           p1.shapeColor="red";
        }
    }
}
function collide2(p1,p2){
    if(p1.x-p2.x<=p1.width/2+p2.width/2){
        p2.velocityX=0;
        if(d2<150){
          p1.shapeColor="green";
        }
        if(d2>150 && d2<275){
           p1.shapeColor="yellow"; 
        }
        if(d2>275){
           p1.shapeColor="red";
        }
    }
}
function collide3(p1,p2){
    if(p1.x-p2.x<=p1.width/2+p2.width/2){
        p2.velocityX=0;
        if(d3<150){
          p1.shapeColor="green";
        }
        if(d3>150 && d3<275){
           p1.shapeColor="yellow"; 
        }
        if(d3>275){
           p1.shapeColor="red";
        }
    }
}
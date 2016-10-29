cAsteroid = function(posX,posY,type){
    this.posX=posX;
    this.posY=posY;
    this.type=type;
    this.speed = 2;
}

function newAsteroid(){ 
    if(Math.random()*100<0.5){
        asteroid[asteroidCount] = new cAsteroid(window.innerWidth,Math.random()*window.innerHeight,Math.random()*2);
        console.log("Se ha creado el asteroide"+(asteroidCount+1)); 
        asteroidCount++;
    }
}
function asteroidMove(){
    for(var i in asteroid){
        asteroid[i].posX-=asteroid[i].speed;
        console.log((i+1)+" posX = "+asteroid[i].posX);
        ctx.fillStyle = "white";
        ctx.fillRect(asteroid[i].posX,asteroid[i].posY,50,50);
    }
}
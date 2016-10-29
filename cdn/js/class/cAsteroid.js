cAsteroid = new function(posX,posY,type){
    this.posX=posX;
    this.posY=posY;
    this.type=type;
    this.speed = 2;
    this.destroy = function(){

    }
}

function newAsteroid(){ 
    if(Math.random()*100<5){
        asteroid[asteroidCount] = new cAsteroid(window.innerWidth,Math.random()*window.innerHeight,Math.random()*2);
        asteroidCount++;
    }
}
function asteroidMove(){
    for(var i in asteroid){
        asteroid[i].posX-=asteroid.speed;
        ctx.fiilStyle = "white";
        ctx.fillRect(asteroid[i].posX,asteroid[i].posY,50,50);
    }
}
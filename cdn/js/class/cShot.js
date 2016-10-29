// DISPARO PLANTILLA 
Shot = function(posX,posY,type,speedX,speedY){
    this.posX = posX;
    this.posY = posY;
    this.type = type;
    this.speedX = speedX;
    this.speedY = speedY;
}

PlayerShot = function(){
    this.move = function(){
        this.posX+=this.speedX;
    }   
}
PlayerShot.prototype = new Shot(player.getPosX(),player.getPosY(),2,10,0);


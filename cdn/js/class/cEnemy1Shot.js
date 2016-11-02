cEnemy1Shot = function(){
    this.move = function(){
        this.posX -= this.speedX;
    }   
}
cEnemy1Shot.prototype = new Shot(player.getPosX(), player.getPosY(), 2, 10, 0);
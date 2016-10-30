var cEnemy1 = function(){
    this.enemyMove = function(){
        if(this.getPosY() <= 0){
            this.newSpeedY(2);
        }
        if(this.getPosY() >= window.innerHeight){
            this.newSpeedY(-2);
        }
        this.setPosX();
        this.setPosY();
        ctx.fillStyle = "green";
        ctx.fillRect(this.getPosX(), this.getPosY(), 10, 10);
    }
}
cEnemy1.prototype = new Ship(101, 100, -2, -2, window.innerWidth-100, window.innerHeight/2);

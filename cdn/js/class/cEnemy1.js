var Enemy1 = function(){
    var dirEnemy1 = "top";
    this.enemyMove = function(){
        enemy1.newSpeedX(enemy1.getSpeedX());
        if(dirEnemy1 == "top"){
            enemy1.newSpeedY(enemy1.getSpeedY());
            if(enemy1.posY <= 0){
                dirEnemy = "bottom";
                enemy1.setSpeedY(5);
            }
        }else{
            enemy1.newSpeedY(enemy1.getSpeedY());
            if(enemy1.posY >= window.innerHeight){
                dirEnemy = "top";
                enemy1.setSpeedY(-5);
            }
        }
    }
}
Enemy1.prototype = new Ship(101, 100, -5, -5, window.innerWidth-100, window.innerHeight/2);

var enemy1 = new Enemy1();
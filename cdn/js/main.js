$(document).ready(function(){
    start();
});

function start(){
    resizeCanvas();

    playerControl();
   
    loop_string = setTimeout("main_menu()", 10);
}

function main_menu(){
    $(document).keydown(function(){
        $("#main_menu").css("visibility", "hidden");
         loop_string = setTimeout("loop()", 1000);
         gamerunning = true;
    });
}

function loop(){
    if(gamerunning){
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        //console.log(player.getPosX());
        // BACKGROUND
        for(var i in bg){
            bg[i].moveBackgroundX(-0.1);
            if(bg[i].getPosX() > -(bg[i].getWidth())){
                ctx.drawImage(backgroundImg[1], bg[i].getPosX(), bg[i].getPosY(), bg[i].getWidth(), bg[i].getHeight());
            }
        }
        //PLAYER
        newAsteroid();
        asteroidMove();
        ctx.fillStyle = "blue";
        player.playerMove();
        // ENEMY
        /*newEnemy1();
        for(var i in enemy1){
            enemy1[i].enemyMove();
        }*/
        ctx.drawImage(playerShipImg,player.getPosX(),player.getPosY(), playerHeight, playerWidth);
        //Shot        
        for(var i in shot){
            switch(shot[i].type){
                case 1:
                    ctx.fillStyle = "red";
                    break;
                case 2:
                    ctx.fillStyle = "green";
                    break;
            } 
            shot[i].move();
            ctx.fillRect(shot[i].posX,shot[i].posY, shot[i].width, shot[i].height);
        }
        destroyAsteroid();
        clearTimeout(loop_string);
        loop_string = setTimeout("loop()", 30);
    }
}
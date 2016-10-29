

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
        //PLAYER
        newAsteroid();
        asteroidMove();
        ctx.fillStyle = "blue";
        player.playerMove();  
        ctx.fillRect(player.getPosX(),player.getPosY(), 20, 20);
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
            ctx.fillRect(shot[i].posX,shot[i].posY, 10, 10);
        }
            //console.log("xd");
        clearTimeout(loop_string);
        loop_string = setTimeout("loop()", 30);
    }
}
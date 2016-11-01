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
        
        // BACKGROUND
        drawBg();

        //PLAYER
        player.playerMove();

        //ENEMY
        enemy1func();  

        //SHOTS 
        drawPlayerShot();  

        //ASTEROIDS
        asteroidFunc();

        clearTimeout(loop_string);
        loop_string = setTimeout("loop()", 30);
        
        contadortiempo++;
    }
}
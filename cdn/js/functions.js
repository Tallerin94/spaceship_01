function resizeCanvas(){
    $("#lienzo").attr("height", window.innerHeight);
    $("#lienzo").attr("width", window.innerWidth);
}

function playerControl(){
    $(document).keydown(function(){
        if(event.which == 38 && gamerunning){dirPosY="up";}
        if(event.which == 40 && gamerunning){dirPosY="down";}
        if(event.which == 37 && gamerunning){dirPosX="left";}
        if(event.which == 39 && gamerunning){dirPosX="right";}
        if(event.which == 32 && gamerunning){
            console.log("has disparado");
            shot[playerShotNumber] = new PlayerShot();
            shot[playerShotNumber].posX = player.getPosX();
            shot[playerShotNumber].posY = player.getPosY();
            playerShotNumber++;
        }
    });
    $(document).keyup(function(){
        if(event.which == 38 && gamerunning && dirPosY=="up"){dirPosY="";}
        if(event.which == 40 && gamerunning && dirPosY=="down"){dirPosY="";}
        if(event.which == 37 && gamerunning && dirPosX=="left"){dirPosX="";}
        if(event.which == 39 && gamerunning && dirPosX=="right"){dirPosX="";}
    });
}
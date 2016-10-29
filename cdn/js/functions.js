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
            shot[playerShotNumber].type = ammoSelected;
            shot[playerShotNumber].posX = player.getPosX();
            shot[playerShotNumber].posY = player.getPosY();
            playerShotNumber++;
        }
        if(event.which == 81 && gamerunning){
            if(ammoSelected == 1){
                ammoSelected = 2;
            }else{
                ammoSelected = 1;
            }
        }
    });
    $(document).keyup(function(){
        if(event.which == 38 && gamerunning && dirPosY=="up"){dirPosY="";}
        if(event.which == 40 && gamerunning && dirPosY=="down"){dirPosY="";}
        if(event.which == 37 && gamerunning && dirPosX=="left"){dirPosX="";}
        if(event.which == 39 && gamerunning && dirPosX=="right"){dirPosX="";}
    });
}
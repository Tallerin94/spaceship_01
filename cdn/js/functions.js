// CANVAS

function resizeCanvas(){
    $("#lienzo").attr("height", window.innerHeight);
    $("#lienzo").attr("width", window.innerWidth);
}

// PLAYER 

function playerControl(){
    $(document).keydown(function(){
        if(event.which == 38 && gamerunning){dirPosY="up";}
        if(event.which == 40 && gamerunning){dirPosY="down";}
        if(event.which == 37 && gamerunning){dirPosX="left";}
        if(event.which == 39 && gamerunning){dirPosX="right";}
        if(event.which == 32 && gamerunning){
            if(player.isAmmoEmpty()){
                console.log("no quedan balas");
            }else{
                console.log("has disparado");
                shot[playerShotNumber] = new PlayerShot();
                shot[playerShotNumber].type = ammoSelected;
                shot[playerShotNumber].posX = player.getPosX();
                shot[playerShotNumber].posY = player.getPosY();
                player.setAmmo(1);
                playerShotNumber++;
            }
            
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
        if(event.which == 38 && gamerunning && dirPosY == "up"){dirPosY = "";}
        if(event.which == 40 && gamerunning && dirPosY == "down"){dirPosY = "";}
        if(event.which == 37 && gamerunning && dirPosX == "left"){dirPosX = "";}
        if(event.which == 39 && gamerunning && dirPosX == "right"){dirPosX = "";}
    });
}

// ASTEROIDES

function newAsteroid(){ 
    if(Math.random()*100<0.5){
        asteroid[asteroidCount] = new cAsteroid(window.innerWidth,Math.random()*window.innerHeight,Math.ceil(Math.random()*2));   
        asteroidCount++;
    }
}
function asteroidMove(){
    for(var i in asteroid){
        asteroid[i].posX-=asteroid[i].speed;
        ctx.drawImage(asteroidImg[asteroid[i].type],asteroid[i].posX,asteroid[i].posY);       
    }
}
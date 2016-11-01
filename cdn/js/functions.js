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
                //console.log("no quedan balas");
            }else{
                //console.log("has disparado");
                shot[playerShotNumber] = new PlayerShot();
                shot[playerShotNumber].type = ammoSelected;
                shot[playerShotNumber].posX = player.getPosX()+playerWidth-5;
                shot[playerShotNumber].posY = player.getPosY()+playerHeight/2-shot[playerShotNumber].height/2;
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

// Player Shots
function drawPlayerShot(){
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
}   

// ASTEROIDES
function asteroidFunc(){
        newAsteroid();
        asteroidMove();
        destroyAsteroid();
}

function newAsteroid(){ 
    if(Math.random()*100 < 2.5){
        asteroid[asteroidCount] = new cAsteroid(window.innerWidth,Math.random()*window.innerHeight,Math.ceil(Math.random()*2));   
        asteroidCount++;
    }
}

function asteroidMove(){
    for(var i in asteroid){
        asteroid[i].posX-=asteroid[i].speed;
        ctx.drawImage(asteroidImg[asteroid[i].type],asteroid[i].posX,asteroid[i].posY,asteroid[i].width,asteroid[i].height);       
    }
}

function destroyAsteroid(){  
    for(var s in shot){
        for(var a in asteroid){          
            if(Math.abs((asteroid[a].posY+asteroid[a].height/2)-(shot[s].posY+shot[s].height/2)) < shot[s].height/2+asteroid[a].height/2 && Math.abs((asteroid[a].posX+asteroid[a].width/2)-(shot[s].posX+shot[s].width/2)) < shot[s].width/2+asteroid[a].width/2){  
                if(Math.random()*2<1){
                    console.log("Ha soltado recompensa");
                }
                $("body").append("<img src='cdn/img/explosion/1.gif' id='asteroide"+contadortiempo+"' style='top:"+(asteroid[a].posY-asteroid[a].height)+"px;left:"+(asteroid[a].posX-asteroid[a].width)+"px;visibility:'></img>");             ;
                $("#asteroide"+(contadortiempo)).fadeOut(300);
                asteroidExplosionCount++;
                shot.splice(s, 1);
                asteroid.splice(a ,1);
                console.log("le has dado");              
                break;
            }
        }
    }
}


// ENEMIGOS
function newEnemy1(){
    if(Math.random()*100 < 5){
        enemy1[enemy1Count] = new cEnemy1();
        //console.log("se ha creado el "+enemy1Count);
        enemy1Count++;
        
    }
}

function enemy1func(){
    newEnemy1();
    for(var i in enemy1){
        enemy1[i].enemyMove();
        //console.log(enemy1[i].getPosX()+"-"+enemy1[i].getPosY())
    }
}

// BACKGROUND
function drawBg(){
    for(var i in bg){
        bg[i].moveBackgroundX(-0.1);
        console.log(bg[i].posX+"-"+ bg[i].getPosY()+"-"+ bg[i].getWidth()+"-"+ bg[i].getHeight())
        if(bg[i].getPosX() > -(bg[i].getWidth())){  
            ctx.drawImage(backgroundImg[1], bg[i].getPosX(), bg[i].getPosY(), bg[i].getWidth(), bg[i].getHeight());
        }
    }
}
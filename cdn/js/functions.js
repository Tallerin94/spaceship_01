// CANVAS
function resizeCanvas(){
    $("#lienzo").attr("width", windowWidth);
    $("#lienzo").attr("height", windowHeight);
}

function newResize(){
    $(window).resize(function(){
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        resizeCanvas();
        playerHeight = windowHeight/5;
        playerWidth = playerHeight;
        for(var i in enemy1){
            enemy1[i].autoSize();
        }
        for(var i in bg){
            bg[i].autoSize();
            bg[i].setPosX(i*windowWidth);
        }
        for(var i in asteroid){
            asteroid[i].autoSize();
        }
    });
}

// PLAYER 
function playerControl(){
    $(document).keydown(function(){
        if(event.which == 38 && gameRunning){dirPosY="up";}
        if(event.which == 40 && gameRunning){dirPosY="down";}
        if(event.which == 37 && gameRunning){dirPosX="left";}
        if(event.which == 39 && gameRunning){dirPosX="right";}
        if(event.which == 32 && gameRunning){
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
        if(event.which == 81 && gameRunning){
            if(ammoSelected == 1){
                ammoSelected = 2;
            }else{
                ammoSelected = 1;
            }
        }
    });
    $(document).keyup(function(){
        if(event.which == 38 && gameRunning && dirPosY == "up"){dirPosY = "";}
        if(event.which == 40 && gameRunning && dirPosY == "down"){dirPosY = "";}
        if(event.which == 37 && gameRunning && dirPosX == "left"){dirPosX = "";}
        if(event.which == 39 && gameRunning && dirPosX == "right"){dirPosX = "";}
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
    if(Math.random()*100 < 0.25){
        asteroid[asteroidCount] = new cAsteroid(windowWidth,Math.random()*windowHeight,Math.ceil(Math.random()*2));   
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
    if(contadortiempo%300 == 0){
        enemy1[enemy1Count] = new cEnemy1();
        enemy1Count++;
    }else if(Math.random()*100 < 0.1){        
        enemy1[enemy1Count] = new cEnemy1();
        enemy1Count++; 
    }
}

function enemyMovement(){
    for(var i in enemy1){
        enemy1[i].enemyMove();
        //console.log(enemy1[i].getPosX()+"-"+enemy1[i].getPosY())
    }
}

function enemyKill(){
    for(var e in enemy1){
        // si se sale de la pantalla por la izq se elimina de la matriz
         if(enemy1[e].getPosX() <= 0-enemy1[e].width){
            enemy1.splice(e ,1);
        }
        // choque con jugador
        for(var s in shot){
            /*if(Math.abs((enemy1[e].getPosY()+enemy1[e].height/2)-(shot[s].posY+shot[s].height/2)) < shot[s].height/2+enemy1[e].height/2){
                console.log("xd");
            }*/
        }       
    }
}

function enemy1func(){
    newEnemy1();
    enemyMovement();
    enemyKill();
}

// BACKGROUND
function drawBg(){
    for(var i in bg){
        bg[i].moveBackgroundX(-10);
        //console.log(bg[i].posX+"-"+ bg[i].getPosY()+"-"+ bg[i].getWidth()+"-"+ bg[i].getHeight())
        if(bg[i].getPosX() > -(bg[i].getWidth())){  
            ctx.drawImage(backgroundImg[1], bg[i].getPosX(), bg[i].getPosY(), bg[i].getWidth(), bg[i].getHeight());
        }else{
            bg[i].posX = windowHeight;
        }
    }
}
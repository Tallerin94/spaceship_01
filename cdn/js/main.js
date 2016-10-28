// DISPARO PLANTILLA 
Shot = function(posX,posY,type,speedX,speedY){
    this.posX = posX;
    this.posY = posY;
    this.type = type;
    this.speedX = speedX;
    this.speedY = speedY;
}

PlayerShot = function(){
    this.move = function(){
        this.posX+=this.speedX;
    }   
}
PlayerShot.prototype = new Shot(player.getPosX(),player.getPosY(),1,10,0);



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
        $("#main_menu").css("visibility","hidden");
         loop_string = setTimeout("loop()", 1000);
         gamerunning = true;
    });
}

function loop(){
    if(gamerunning){
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        //console.log(player.getPosX());
        //PLAYER
        //player.cambiaSpeed(player.getSpeed()+1);
        ctx.fillStyle = "blue";
        player.setPosX();  
        ctx.fillRect(player.getPosX(),player.getPosY(),20,20);
        //Shot
        ctx.fillStyle = "red";
        for(var i=0;i<playerShotNumber;i++){
            shot[i].move();
            ctx.fillRect(shot[i].posX,shot[i].posY,10,10);
        }
            //console.log("xd");
        clearTimeout(loop_string);
        loop_string = setTimeout("loop()",33);
    }
}
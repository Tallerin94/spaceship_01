// DISPARO PLANTILLA 
Shot = function(posx,posy,type,speed){
    this.posx = posx;
    this.posy = posy;
    this.type = type;
    this.speed = speed;
}

PlayerShot = function(){
    this.move = function(){
        this.posx+=this.speed;
    }   
}
PlayerShot.prototype = new Shot(player.getPosX(),player.getPosY(),1,10);



$(document).ready(function(){
    start();
});

function start(){

    resizeCanvas();

    $(document).keydown(function(){
        if(event.which == 38 && gamerunning){console.log("Arriba")}
        if(event.which == 40 && gamerunning){console.log("Abajo")}
        if(event.which == 37 && gamerunning){console.log("Izquierda")}
        if(event.which == 39 && gamerunning){console.log("Derecha")}
        if(event.which == 32 && gamerunning){
            console.log("has disparado");
            shot[player_shot_number] = new PlayerShot();
            player_shot_number++;
        }
    });
    
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
        console.log(player.getPosX());
        //PLAYER
        ctx.fillStyle = "blue";
        player.setPosX();  
        ctx.fillRect(player.getPosX(),player.getPosY(),20,20);
        //Shot
        ctx.fillStyle = "red";
        for(var i=0;i<player_shot_number;i++){
            shot[i].move();
            ctx.fillRect(shot[i].posx,shot[i].posy,10,10);
        }
            //console.log("xd");
        clearTimeout(loop_string);
        loop_string = setTimeout("loop()",33);
    }
}
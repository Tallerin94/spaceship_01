var gamerunning = false;

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
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fillStyle = "red";
    player.playerMove();    
    ctx.fillRect(player.posx,player.posy,20,20);
    //console.log("xd");
    clearTimeout(loop_string);
    loop_string = setTimeout("loop()",33);
}
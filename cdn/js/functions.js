function resizeCanvas(){
    $("#lienzo").attr("height", window.innerHeight);
    $("#lienzo").attr("width", window.innerWidth);
}

function playerControl(){
    $(document).keydown(function(){
        if(event.which == 38 && gamerunning){console.log("Arriba")}
        if(event.which == 40 && gamerunning){console.log("Abajo")}
        if(event.which == 37 && gamerunning){console.log("Izquierda")}
        if(event.which == 39 && gamerunning){console.log("Derecha")}
        if(event.which == 32 && gamerunning){
            console.log("has disparado");
            shot[playerShotNumber] = new PlayerShot();
            shot[playerShotNumber].posX = player.getPosX();
            shot[playerShotNumber].posY = player.getPosY();
            playerShotNumber++;
        }
    });
}
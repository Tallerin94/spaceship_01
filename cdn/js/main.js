//////////////////////////////////////////////////////////////////////////
//                   Función para el bucle principal                    //
//////////////////////////////////////////////////////////////////////////
function loop(){
    if(gameRunning){
        newResize();            // Nuevo tamaño de la ventana
        ctx.clearRect(0,0,windowWidth,windowHeight);
        manageBackground();     // Crea los backgrounds
        bottomHUD.createHUD();  // Crea la HUD de abajo
        player.playerMove();    // Mueve el personaje
        enemy1func();           // Crea enemigos, los mueve y los mata
        drawPlayerShot();       // Dibuja las balas
        asteroidFunc();         // Crea asteroides, los mueve y los destruye
        contadortiempo++;
        clearTimeout(loop_string);
        loop_string = setTimeout("loop()", 30); 
    }
}

//////////////////////////////////////////////////////////////////////////
//                     Función para empezar el bucle                    //
//////////////////////////////////////////////////////////////////////////
function main_menu(){
    newResize();            // Nuevo tamaño de la ventana
    $(document).keydown(function(){
        if(menuActive && gameRunning==false){
            $("#main_menu").css("display", "none");
            getSizeImg = setTimeout("sizeImg()", 500);
            loop_string = setTimeout("loop()", 1000);
            gameRunning = true;
            menuActive = false;
        }
    });
    
}

//////////////////////////////////////////////////////////////////////////
//             Función para llamar la pantalla principal                //
//////////////////////////////////////////////////////////////////////////
function start(){
    $("#main_menu").css("display", "block");
    resizeCanvas();
    playerControl();
    loop_string = setTimeout("main_menu()", 10);
}

function undefinedScreen(){
    manageUndefined();
}

$(document).ready(function(){
    //start();
    undefinedScreen();
});
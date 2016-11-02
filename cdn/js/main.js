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
        enemy1Shots();          
        drawPlayerShot();       // Dibuja las balas
        asteroidFunc();         // Crea asteroides, los mueve y los destruye
        Colisions();
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
    $(document).keydown(function(key){
        if(key.which == 13){
            switch(menu_option){
                case 1:
                    if(menuActive && gameRunning == false){
                        $("#main_menu").fadeOut(500);
                        getSizeImg = setTimeout("sizeImg()", 500);
                        loop_string = setTimeout("loop()", 1000);
                        gameRunning = true;
                        menuActive = false;
                    }
                    break;
            }
        }
        if(key.which == 38){
            console.log("has movido hacia arriba");
        }
    });
}

//////////////////////////////////////////////////////////////////////////
//             Función para llamar la pantalla principal                //
//////////////////////////////////////////////////////////////////////////
function start(){
    $("#logo").css("width", windowHeight/1.5);
    $("#logo").css("height", windowHeight/1.5);
    $("#main_menu").fadeIn(200);
    resizeCanvas();
    playerControl();
    loop_string = setTimeout("main_menu()", 10);
}

function undefinedScreen(){
    manageUndefined();
}

$(document).ready(function(){
    undefinedScreen();
});
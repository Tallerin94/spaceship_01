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
        console.log("Life: "+player.getLife()+" Ammo: "+player.getAmmo()); 
    }
}

//////////////////////////////////////////////////////////////////////////
//                     Función para empezar el bucle                    //
//////////////////////////////////////////////////////////////////////////
function main_menu(){
    newResize();            // Nuevo tamaño de la ventana
    selectOption();         // SElecciona la opción del menu
}

//////////////////////////////////////////////////////////////////////////
//             Función para llamar la pantalla principal                //
//////////////////////////////////////////////////////////////////////////
function start(){
    resizeStart();
    resizeCanvas();
    playerControl();
    loop_string = setTimeout("main_menu()", 10);
}

//////////////////////////////////////////////////////////////////////////
//             Función para llamar la pantalla undefined                //
//////////////////////////////////////////////////////////////////////////
function undefinedScreen(){
    manageUndefined();
}

$(document).ready(function(){
    undefinedScreen();
});
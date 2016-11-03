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
    $("#logo").css("width", windowHeight/1.5);
    $("#logo").css("height", windowHeight/1.5);
    $("#startMenu").css("font-size", windowHeight/14.7);
    $("#startControls").css("font-size", windowHeight/30+"px");
    $("#startControls").css("line-height", ((windowHeight/30)+25)+"px");
    $("#startBest").css("font-size", windowHeight/30+"px");
    $("#startBest").css("line-height", ((windowHeight/30)+25)+"px");
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
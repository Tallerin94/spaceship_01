var temporizador = "";

$(document).ready(function(){
    start();
});

function start(){
    $("#lienzo").attr("height", window.innerHeight);
    $("#lienzo").attr("width", window.innerWidth);
    temporizador = setTimeout("loop()", 1000);
}

function loop(){
    clearTimeout(temporizador);
    setTimeout("loop()",33);
}
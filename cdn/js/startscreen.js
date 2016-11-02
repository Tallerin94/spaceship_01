function startMenu(){
    start();
}
function fadeOutLogo(){
    $("#undefined-logo").fadeOut(1000);
    clearTimeout(startScreenTimer);
    startScreenTimer = setTimeout("startMenu()", 1000);
}
function manageUndefined(){
    $("#undefined-logo").fadeIn(1000);
    startScreenTimer = setTimeout("fadeOutLogo()", 2500);
}
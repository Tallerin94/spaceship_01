function startMenu(){
    start();
}

function disapearLogo(){
    $("#undefined-logo").css("display", "none");
    clearTimeout(startScreenTimer);
    startScreenTimer = setTimeout("startMenu()", 1000);
}

function fadeOutLogo(){
    $("#undefined-logo").fadeOut(1000);
    clearTimeout(startScreenTimer);
    startScreenTimer = setTimeout("disapearLogo()", 1000);
}

function manageUndefined(){
    $("#undefined-logo").fadeIn(1000);
    startScreenTimer = setTimeout("fadeOutLogo()", 2000);
}
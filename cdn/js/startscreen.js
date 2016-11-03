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

function selectOption(){
    $(document).keydown(function(key){
        if(isInMenu){
            if(key.which == 13){
                switch(menu_option){
                    case 1:
                        if(menuActive && gameRunning == false){
                            $("#main_menu").fadeOut(500);
                            getSizeImg = setTimeout("sizeImg()", 500);
                            loop_string = setTimeout("loop()", 1000);
                            gameRunning = true;
                            menuActive = false;
                            isInMenu = false;
                        }
                        break;
                    case 2:
                        $("#startMenu").css("display", "none");
                        $("#startControls").css("display", "block");
                        $(document).keydown(function(key2){
                            if(key2.which == 27){
                                $("#startControls").css("display", "none");
                                $("#startMenu").css("display", "block");
                            }
                        });
                        break;
                    case 3:
                        $("#startMenu").css("display", "none");
                        $("#startBest").css("display", "block");
                        $(document).keydown(function(key2){
                            if(key2.which == 27){
                                $("#startBest").css("display", "none");
                                $("#startMenu").css("display", "block");
                            }
                        });
                        break;
                    case 4:
                        if(menuActive && gameRunning == false){
                            // Por ahora simplemente relogea la página
                            // Cuando sea apk cerrará la aplicación.
                            location.reload();
                        }
                        break;
                    default:
                        console.log("What the hell are you doing?");
                }
            }
            if(key.which == 38){
                if(menu_option <= 1){
                    menu_option = 4;
                    selectPosition = 86;
                    $("#selected").css("top", selectPosition+"%");
                }else{
                    menu_option--;
                    selectPosition -= 26;
                    $("#selected").css("top", selectPosition+"%");
                }
            }
            if(key.which == 40){
                if(menu_option >= 4){
                    menu_option = 1;
                    selectPosition = 8;
                    $("#selected").css("top", selectPosition+"%");
                }else{
                    menu_option++;
                    selectPosition += 26;
                    $("#selected").css("top", selectPosition+"%");
                }
            }
        }
    });
}
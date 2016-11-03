cHUD = function(posX, posY){
    this.posX = posX;
    this.posY = posY;

    this.createHUD = function(life, name){
        $("#"+name).css("display", "block");
        $("#"+name).html("Heal points: "+life);
    }
}

var lifeHUD = new cHUD((windowWidth - (windowWidth - 50)), (windowHeight - 50));

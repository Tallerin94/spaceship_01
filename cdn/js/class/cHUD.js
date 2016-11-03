cHUD = function(posX, posY){
    this.posX = posX;
    this.posY = posY;

    this.createHUD = function(life, name, text){
        $("#"+name).css("display", "block");
        $("#"+name).html(text+life);
    }
}

var lifeHUD = new cHUD((windowWidth - (windowWidth - 50)), (windowHeight - 50));
var shotHUD = new cHUD((windowWidth - (windowWidth - 100)), (windowHeight - 50));
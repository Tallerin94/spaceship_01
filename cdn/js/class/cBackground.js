var cBackground = function(){
    var posX = 0;
    var posY = 0;
    var width = window.innerWidth;
    var height = window.innerHeight;

    this.getPosX = function(){
        return posX;
    }
    this.getPosY = function(){
        return posY;
    }
    this.setPosX = function(value){
        posX += value;
    }
    this.setPosY = function(value){
        posY += value;
    }
    this.getWidth = function(){
        return width;
    }
    this.getHeight = function(){
        return height;
    }
    this.setWidth = function(value){
        width = value;
    }
    this.setHeight = function(value){
        height = value;
    }
    this.moveBackgroundX = function(value){
        this.setPosX(value);
    }
}

var bg = new Array();

// Generamos 50 bgs que son suficientes para terminar el nivel
for(var i=0;i<50;i++){
    bg[i] = new cBackground();
    bg[i].setPosX(i*bg[i].getWidth());
}
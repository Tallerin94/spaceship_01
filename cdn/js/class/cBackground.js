var cBackground = function(posx, posy){
    /*var width = window.innerWidth;
    var height = window.innerHeight;
    this.posX = posx;*/
    var width = windowWidth;
    var height = windowHeight;
    this.posX = posx
    this.posY = posy;

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
    this.getPosX = function(){
        return this.posX;
    }
    this.getPosY = function(){
        return this.posY;
    }
    this.setPosX = function(value){
        this.posX += value;
    }
    this.setPosY = function(value){
        this.posY += value;
    }
    this.moveBackgroundX = function(value){
        this.setPosX(value);
    }
    this.autoSize = function(){
        width = windowWidth;
        height = windowHeight;
        this.posX = 0;
    }
}

var bg = new Array();

for(var i=0;i<3;i++){
    bg[i] = new cBackground(0,0);
    bg[i].setPosX(i*windowWidth);
}
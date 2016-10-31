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
    this.moveBackgroundX = function(){
        this.setPosX(-0.1);
        if(this.getPosX()%this.getWidth() == 0){
            
        }
    }
}

var bg = new cBackground();
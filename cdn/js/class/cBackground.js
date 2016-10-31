var cBackground = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

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
}
cBackground.prototype = new cBgobject();

var bg = new Array();

// Generamos 50 bgs que son suficientes para terminar el nivel
for(var i=0;i<50;i++){
    bg[i] = new cBackground();
    bg[i].setPosX(i*bg[i].getWidth());
}
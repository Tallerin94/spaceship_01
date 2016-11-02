var cHUD = function(posX, posY, type, width, height){
    this.posX = posX;
    this.posY = posY;
    this.width = hudBottomWidth;
    this.height = hudBottomHeight;
    this.type = type;

    this.createHUD = function(){
        ctx.drawImage(this.type, this.posX, this.posY, this.width, this.height);
        console.log(this.type+" / "+this.posX+" / "+this.posY+" / "+this.width+" / "+this.height);
    }
}

var bottomHUD = new cHUD(windowWidth/2 - hudBottomWidth/2, windowHeight - hudBottomHeight, hudBottom, hudBottomWidth, hudBottomHeight);
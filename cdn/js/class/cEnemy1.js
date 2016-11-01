var cEnemy1 = function(){
    //SPEED X
    var speedX = -2;
    this.getSpeedX = function(){
        return speedX;
    }

    var setSpeedX = function(setSpX){ // Funcion para comprobar si 
        speedX = setSpX;                 // puedo pasar desde fuera por parámetro
        //console.log(speedX);         // (FUNCIONA)
    }
    this.newSpeedX = function(setSpX){
        setSpeedX(setSpX);
    }
    // SPEED Y
    var speedY = Math.random()*2;
    // Ajusta la valocidad Y a 2 || -2
    if(speedY<=1){speedY = -2;}else{speedY = 2;}

    this.getSpeedY = function(){
        return speedY;
    }
    
    var setSpeedY = function(setSpY){ // Funcion para comprobar si 
        speedY = setSpY;                 // puedo pasar desde fuera por parámetro
        //console.log(speedY);         // (FUNCIONA)
    }
    this.newSpeedY = function(setSpY){
        setSpeedY(setSpY);
    }
    //POSX
    var posX = window.innerWidth;
    this.getPosX = function(){
        return posX;
    }
    
    this.setPosX = function(){
        posX += speedX;
        // LIMITS posX
        if(posX > window.innerWidth){posX = window.innerWidth;}
        if(posX < 0){posX = 0;}

        //console.log(speed);
    }
    
    //POSY
    var posY = Math.random()*window.innerHeight;
    this.getPosY = function(){
        return posY;
    }
    this.setPosY = function(){
        posY += speedY;
        // Limits posY
        if(posY>window.innerHeight){posY=window.innerHeight;}
        if(posY<0){posY=0;}
        //console.log(speed);
    }

    this.enemyMove = function(){
        if(this.getPosY() <= 0){
            this.newSpeedY(2);
        }
        if(this.getPosY() >= window.innerHeight){
            this.newSpeedY(-2);
        }
        this.setPosX();
        this.setPosY();
        ctx.fillStyle = "green";
        ctx.fillRect(this.getPosX(), this.getPosY(), 10, 10);
    }
}
//cEnemy1.prototype = new Ship(101, 100, -2, -2, window.innerWidth-100, window.innerHeight/2);

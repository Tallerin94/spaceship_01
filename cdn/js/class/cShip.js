// NAVE PLANTILLA
Ship = function(type, life, speedX, speedY, posX, posY){
    // TYPE
    var type = type;
    this.getType = function(){
        return this.type;
    }
    //LIFE
    var life = life;
    this.getLife = function(){
        return life;
    }
    //SPEED X
    var speedX = speedX;
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
    var speedY = speedY;
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
    var posX = posX;
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
    /*this.moveX = function(){
        setPosX();
    }*/
    //POSY
    var posY = posY;
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
    /*
    this.moveY = function(){
        setPosY();
    }*/
}

// NAVES ENEMIGAS 
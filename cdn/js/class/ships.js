// NAVE PLANTILLA
Ship = function(type,life,ammo,speedX,speedY,posX,posY){
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
    //AMMO
    var ammo = ammo;
    this.getAmmo = function(){
        return ammo;
    }
    //SPEED X
    var speedX = speedX;
    this.getSpeedX = function(){
        return speedX;
    }

    var setSpeedX = function(setSpX){ // Funcion para comprobar si 
        speedX=setSpX;                 // puedo pasar desde fuera por parámetro
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
        speedY=setSpY;                 // puedo pasar desde fuera por parámetro
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
        posX+=speedX;
        //console.log(speed);
    }
    this.moveX = function(){
        setPosX();
    }
    //POSY
    var posY = posY;
    this.getPosY = function(){
        return posY;
    }
    this.setPosY = function(){
        posY+=speedY;
        //console.log(speed);
    }
    this.moveY = function(){
        setPosY();
    }
}

// NAVE DEL JUGADOR
Player = function(){
    this.playerMove = function(){
        // LEFT / RIGHT
        if(dirPosX=="left"){player.newSpeedX(player.getSpeedX()-1);}
        if(dirPosX=="right"){player.newSpeedX(player.getSpeedX()+1);}
        if(player.getSpeedX()>10){player.newSpeedX(10);}
        if(player.getSpeedX()<-10){player.newSpeedX(-10);}
        player.setPosX();
        // UP / DOWN
        if(dirPosY=="up"){player.newSpeedY(player.getSpeedY()-1);}
        if(dirPosY=="down"){player.newSpeedY(player.getSpeedY()+1);}
        if(player.getSpeedY()>10){player.newSpeedY(10);}
        if(player.getSpeedY()<-10){player.newSpeedY(-10);}
        player.setPosY();
        // NONE 
        if(dirPosY=="" && player.getSpeedY()<0){player.newSpeedY(player.getSpeedY()+0.5);}
        if(dirPosY=="" && player.getSpeedY()>0){player.newSpeedY(player.getSpeedY()-0.5);}
        if(dirPosX=="" && player.getSpeedX()<0){player.newSpeedX(player.getSpeedX()+0.5);}
        if(dirPosX=="" && player.getSpeedX()>0){player.newSpeedX(player.getSpeedX()-0.5);}
        //console.log(player.getSpeedX());
    }
}
Player.prototype = new Ship(1,3,10,0,0,100,window.innerHeight/2);

var player = new Player();

// NAVES ENEMIGAS 
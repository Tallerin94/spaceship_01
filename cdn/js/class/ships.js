// NAVE PLANTILLA
Ship = function(type,life,ammo,speed,posX,posY){
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
    //SPEED
    var speed = speed;
    this.getSpeed = function(){
        return speed;
    }

    var multspeed = function(mult){ // Funcion para comprobar si 
        speed=mult;                 // puedo pasar desde fuera por parámetro
        console.log(speed);         // (FUNCIONA)
    }
    this.cambiaSpeed = function(mult){
        multspeed(mult);
    }
    //POSX
    var posX = posX;
    this.getPosX = function(){
        return posX;
    }
    
    this.setPosX = function(){
        posX+=speed;
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
}

// NAVE DEL JUGADOR
Player = function(){
    this.playerMove = function(){
        this.posX += this.getspeed();
        console.log(this.posx);
    }
}
Player.prototype = new Ship(1,3,10,5,100,window.innerHeight/2);

var player = new Player();

// NAVES ENEMIGAS 
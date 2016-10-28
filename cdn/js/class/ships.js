// NAVE PLANTILLA
Ship = function(type,life,ammo,speed,posX,posY){
    var type = type;
    this.getType = function(){
        return this.type;
    }
    var life = life;
    this.getLife = function(){
        return life;
    }
    var ammo = ammo;
    this.getAmmo = function(){
        return ammo;
    }
    var speed = speed;
    this.getSpeed = function(){
        return speed;
    }
    var posX = posX;
    this.getPosX = function(){
        return posX;
    }
    
    var setPosX = function(){
        posX+=speed;
    }
    this.moveX = function(){
        setPosX();
    }
    var posY = posY;
    this.getPosY = function(){
        return posY;
    }
}

// NAVE DLE JUGADOR
Player = function(){
    this.playerMove = function(){
        this.posX += this.getspeed();
        console.log(this.posx);
    }
}
Player.prototype = new Ship(1,3,10,5,100,window.innerHeight/2);

var player = new Player();

// NAVES ENEMIGAS 
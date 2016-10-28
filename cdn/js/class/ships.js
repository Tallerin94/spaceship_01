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
    // He hecho varias pruebas de diferentes maneras, esta es la ultima que he probado 
    /*this.setPosX = function(){
        console.log(this.getSpeed());
        this.posx+=this.getSpeed();
    }*/ 
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
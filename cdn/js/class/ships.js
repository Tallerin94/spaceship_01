// NAVE PLANTILLA
Ship = function(type,life,ammo,speed,posX,posY){
    this.type = type;
    this.life = life;
    this.ammo = ammo;
    this.speed = speed;
    this.posX = posX;
    this.posY = posY;
}

// NAVE DLE JUGADOR
Player = function(){
    this.playerMove = function(){
        this.posX +=this.speed;
    }
}
Player.prototype = new Ship(1,3,10,5,100,window.innerHeight/2);

var player = new Player();

// NAVES ENEMIGAS 
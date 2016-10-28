Ship = function(type,life,ammo,speed,posx,posy){
    this.type = type;
    this.life = life;
    this.ammo = ammo;
    this.speed = speed;
    this.posx = posx;
    this.posy = posy;
}


Player = function(){
    this.playerMove = function(){
        this.posx +=this.speed;
    }
}
Player.prototype = new Ship(1,3,10,5,100,window.innerHeight/2);

var player = new Player();

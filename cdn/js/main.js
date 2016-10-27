$(document).ready(function(){
    start();
});

function Nave(type,life,ammo,speed,posx,posy){
    this.type = type;
    this.life = life;
    this.ammo = ammo;
    this.speed = speed;
    this.posx = posx;
    this.posy = posy;
}

Nave.prototype.playerMove = function(){
    this.posx+=this.speed;
}
var player = new Nave(1,3,10,5,100,window.innerHeight/2);

function start(){
    $("#lienzo").attr("height", window.innerHeight);
    $("#lienzo").attr("width", window.innerWidth);
    loop_string = setTimeout("main_menu()", 10);
}

function main_menu(){
    $(document).keydown(function(){
        $("#main_menu").css("visibility","hidden");
         loop_string = setTimeout("loop()", 1000);
    });
}

function loop(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fillStyle = "red";
    player.playerMove();
    ctx.fillRect(player.posx,player.posy,20,20);
    //console.log("xd");
    clearTimeout(loop_string);
    loop_string = setTimeout("loop()",33);
}
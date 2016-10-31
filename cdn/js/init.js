// CANVAS
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d"); 
// Game Loop Control
var loop_string = "";
var gamerunning = false;
//Player Ship
var playerHeight = window.innerHeight/5;
var playerWidth = playerHeight;
var playerShipImg = new Image();
playerShipImg.src ="cdn/img/ships/1.png" 
// Player Shots
var playerShotHeight = 10;
var playerShotWidth = 15;
var playerShotNumber = 0;
var shot = new Array();
var ammoSelected = 1;
var ammoStart = 20;
var maxAmmoPlayer1 = 50;
var maxAmmoPlayer2 = 40;
var maxAmmoPlayer3 = 30;
var maxAmmoPlayer4 = 40;
var maxAmmoPlayer5 = 50;
// Player Controler
var dirPosX = "";
var dirPosY = "";

//Asteroids
var asteroid = new Array();
var asteroidCount = 0;
var asteroidImg = new Array();
var asteroids = 2;
var asteroidWidth = window.innerHeight/10
var asteroidHeight = asteroidWidth;

asteroidImg[1] = new Image();
asteroidImg[1].src = "cdn/img/asteroid/1.png";
asteroidImg[2] = new Image();
asteroidImg[2].src = "cdn/img/asteroid/2.png";

//Rec
var rec = new Array();

// Enemy1
var enemy1 = new Array();
var enemy1Count = 0;

// Background
var backgroundImg = new Array();
var backgroundCount = 5;
for(var i=1;i<backgroundCount;i++){
    backgroundImg[i] = new Image();
    backgroundImg[i].src = "cdn/img/background/"+i+".png";
}
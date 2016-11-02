// CANVAS
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d"); 

var windowHeight  = window.innerHeight;
var windowWidth = window.innerWidth;

/*$(window).resize(function(){
    windowHeight  = window.innerHeight;
    windowWidth = window.innerWidth
})*/
// Game Loop Control
var loop_string = "";
var gameRunning = false;
//Player Ship
var playerHeight = windowHeight/5;
var playerWidth = playerHeight;
var playerShipImg = new Image();
playerShipImg.src ="cdn/img/ships/1.png" 
// Player Shots
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
var asteroidExplosionCount = 0;
var asteroidKillCount = 0;
var asteroidImg = new Array();
var asteroids = 2;


asteroidImg[1] = new Image();
asteroidImg[1].src = "cdn/img/asteroid/1.png";
asteroidImg[2] = new Image();
asteroidImg[2].src = "cdn/img/asteroid/2.png";

//Rec
var rec = new Array();

// Enemy1
var enemy1 = new Array();
var enemy1Count = 0;
var enemy1Img = new Image();
enemy1Img.src = "cdn/img/ships/2.png" 
// Background
var backgroundImg = new Array();
var backgroundCount = 6;
for(var i=1;i<backgroundCount;i++){
    backgroundImg[i] = new Image();
    backgroundImg[i].src = "cdn/img/background/"+i+".png";
}
var imgBg2Width = 0;
var imgBg2Height = 0;
var imgBg3Width = 0;
var imgBg3Height = 0;
var imgBg4Width = 0;
var imgBg4Height = 0;
var imgBg5Width = 0;
var imgBg5Height = 0;

var marsImg = new Image();
marsImg.src = "cdn/img/planets/mars.png";

var contadortiempo = 0;

var getSizeImg = "";

function sizeImg(){
    imgBg2Width = windowWidth/1.5;
    imgBg2Height = windowHeight/1.5;
    imgBg3Width = windowWidth/1.5;
    imgBg3Height = windowHeight/1.5;
    imgBg4Width = windowWidth/1.5;
    imgBg4Height = windowHeight/1.5;
    imgBg5Width = backgroundImg[5].width;
    imgBg5Height = backgroundImg[5].height;
}
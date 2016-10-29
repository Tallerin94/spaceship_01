// CANVAS
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d"); 
// Game Loop Control
var loop_string = "";
var gamerunning = false;

// Player Shots
var playerShotNumber = 0;
var shot = new Array();
var ammoSelected = 1;
var ammoStart = 20;
// Player Controler
var dirPosX = "";
var dirPosY = "";

//Asteroids
var asteroid = new Array();
var asteroidCount = 0;
var AsteroidImg = new Array();
var asteroids = 2;
for(var i =1;i<asteroids;i++){
    
}
AsteroidImg[0] = new Image();
AsteroidImg[0].src = "cdn/img/asteroid/1.png";
AsteroidImg[1] = new Image();
AsteroidImg[0].src = "cdn/img/asteroid/2.png";



//Rec
var rec = new Array();
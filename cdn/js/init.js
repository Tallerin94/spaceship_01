// CANVAS
var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d"); 
// Game Loop Control
var loop_string = "";
var gamerunning = false;

// Player Shots
var playerShotNumber = 0;
var shot = new Array();

// Player Controler
var dirPosX = "";
var dirPosY = "";
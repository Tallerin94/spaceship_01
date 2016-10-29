// NAVE DEL JUGADOR
Player = function(){
    this.playerMove = function(){
        // LEFT / RIGHT
        if(dirPosX == "left"){player.newSpeedX(player.getSpeedX()-1);}
        if(dirPosX == "right"){player.newSpeedX(player.getSpeedX()+1);}
        if(player.getSpeedX()>14){
            // Limitador de velocidad en diagonal
            if(dirPosY == "up" || dirPosY == "down"){
                player.newSpeedX(10);
            }else{
                player.newSpeedX(14);
            }
        }
        if(player.getSpeedX()<-7){
            // Limitador de velocidad en diagonal
            if(dirPosY == "up" || dirPosY == "down"){
                player.newSpeedX(-7);
            }else{
                player.newSpeedX(-4);
            }
        }
        player.setPosX();
        // UP / DOWN
        if(dirPosY == "up"){player.newSpeedY(player.getSpeedY()-1);}
        if(dirPosY == "down"){player.newSpeedY(player.getSpeedY()+1);}
        if(player.getSpeedY() > 10){player.newSpeedY(10);}
        if(player.getSpeedY() < -10){player.newSpeedY(-10);}
        player.setPosY();
        // NONE 
        if(dirPosY == "" && player.getSpeedY() < 0){player.newSpeedY(player.getSpeedY()+0.5);}
        if(dirPosY == "" && player.getSpeedY() > 0){player.newSpeedY(player.getSpeedY()-0.5);}
        if(dirPosX == "" && player.getSpeedX() < 0){player.newSpeedX(player.getSpeedX()+0.5);}
        if(dirPosX == "" && player.getSpeedX() > 0){player.newSpeedX(player.getSpeedX()-0.5);}
        //  
    }
}
Player.prototype = new Ship(1,3,10,0,0,100,window.innerHeight/2);

var player = new Player();
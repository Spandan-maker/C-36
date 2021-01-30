var form1, player1, Game;

var gameState = 0;
var playerCount, database;

function setup(){
  var canvas = createCanvas(400,400);

  database = firebase.database();

  Game = new game();
  Game.getState();
  Game.start();

}

function draw(){
  
}
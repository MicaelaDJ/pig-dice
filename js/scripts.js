// ### Business Logic ### ----- -----
// var player
// constructor for turns
// prototype for rolling
// prototype for holdig
// totaling score
// changing turns
// player win
// restart game

var player1 = "Player One"
var player2 = "Player Two"

function Player() {
  this.roll = roll,
  this.hold = hold,
  this.score = score,
  this.turn = turn
}

Player.prototype.rollDice = function(roll){
  return math.random(6)
}

function checkTurn(turn) {
  if ( turn === true) {
    game.player1.playerMove();
  }
}


// ### User Interface ### ----- -----
$(document).ready(function() {

}); //end document.ready

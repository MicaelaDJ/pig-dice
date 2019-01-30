// ### Business Logic ### ----- -----
// var player
// constructor for turns
// prototype for rolling
// prototype for holding
// totaling score
// changing turns
// player win
// restart game
//this block of code sets up the points/
/*
function Player (totalPoints, roundPoints) {
  this.totalPoints,
  this.roundPoints
}
//this block of code sets variables
var player1 = Player("player1");
var player2 = Player("player2");

function() {
  // currentRoll: 0
  // tempScore: 0,
  // totalScore,
  // isTurn
};

Player.rollDice = function(){
  this.tempScore = alert("UHOH");
  //return this.math.random(6)
};
*/

function Player() {
  this.tempScore = 0,
  this.totalScore = 0;
};

var playerOne = new Player();
var playerTwo = new Player();

Player.prototype.rollDice = function() {
  this.dice = Math.floor(Math.random() * 6) + 1;
  $("#rollArea").text(this.dice);
};

// Playerproptot.checkOne = function() {
//   dice
// }



// ### User Interface ### ----- -----
$(document).ready(function() {
  $("button#player1Roll").click(function(event) {
    event.preventDefault();
    $("#player1Roll").hide();
    $("#player2Roll").show();
    playerOne.rollDice();
    $("#player2score").text(playerOne.tempScore);
  }); // end button#player1Roll.click
  $("#player2Roll").click(function(event) {
    event.preventDefault();
    $("#player2Roll").hide();
    $("#player1Roll").show();
    $("#player2score").text(Player.totalScore++);
    Player.prototype.rollDice();
  }); // end button#player1Roll.click
}); //end document.ready

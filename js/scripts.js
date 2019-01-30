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

Player.tempScore = 0;
Player.totalScore = 0;

function Player (tempScore, totalScore) {
  this.tempScore = tempScore,
  this.totalScore = totalScore;
};

Player.prototype.rollDice = function() {
  let dice = Math.floor(Math.random() * 6) + 1;
    $("#dice").text(dice);
};

// ### User Interface ### ----- -----
$(document).ready(function() {
  $("button#player1Roll").click(function(event) {
    event.preventDefault();
    $("#player1Roll").hide();
    $("#player2Roll").show();
    $("#player1score").text(Player.totalScore++);
    Player.prototype.rollDice();
  }); // end button#player1Roll.click
  $("#player2Roll").click(function(event) {
    event.preventDefault();
    $("#player2Roll").hide();
    $("#player1Roll").show();
    $("#player2score").text(Player.totalScore++);
    Player.prototype.rollDice();
  }); // end button#player1Roll.click
}); //end document.ready

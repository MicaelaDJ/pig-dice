// ### Business Logic ### ----- -----
// var player DONE
// constructor for turns
// prototype for rolling DONE
// prototype for holding
// totaling score
// changing turns
// player win
// restart game

function Player() {
  this.tempScore = 0,
  this.totalScore = 0;
};

var playerOne = new Player();
var playerTwo = new Player();

Player.prototype.rollDice = function() {
  this.dice = Math.floor(Math.random() * 6) + 1;
  $("#rollArea").text(this.dice);
  if ( this.dice === 1 ) {
    this.tempScore = 0;
    return false;
  } else if ( this.dice !== 1 ) {
    this.tempScore += this.dice;
    return this.tempScore;
  } else {
    return;
  };
};

//Player.prototype.



// ### User Interface ### ----- -----
$(document).ready(function() {
  $("button#player1Roll").click(function(event) {
    event.preventDefault();
    var result = playerOne.rollDice();
    if ( result = false ) {
      $("#player1Roll").hide();
      $("#player2Roll").show();
    } else {
      $("#player1score").text(playerOne.tempScore);
    }
  }); // end button#player1Roll.click
  $("#player2Roll").click(function(event) {
    event.preventDefault();
    var result = playerOne.rollDice();
    if ( result = false ) {
      $("#player2Roll").hide();
      $("#player1Roll").show();
    } else {
      $("#player2score").text(playerTwo.tempScore);
    }
    Player.prototype.rollDice();
  }); // end button#player1Roll.click
}); //end document.ready

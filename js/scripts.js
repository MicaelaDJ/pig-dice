// ### Business Logic ### ----- -----
// var player DONE
// thing for turns DONE
// prototype for rolling DONE
// prototype for holding DONE
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
  console.log("Dice:" + this.dice);
  if ( this.dice === 1 ) {
    this.tempScore = 0;
    console.log("One:" + this.dice)
    return false;
  } else if ( this.dice !== 1 ) {
    this.tempScore += this.dice;
    console.log("NotOne:" + this.dice)
    return this.tempScore;
  } else {
    alert("Error: That wasn't supposed to happen.");
    location.reload();
  };
}; // end of rollDice

Player.prototype.holdDice = function() {

}; // end of holdDice

// ### User Interface ### ----- -----
$(document).ready(function() {
  $("button#player1Roll").click(function(event) {
    event.preventDefault();
    var result = playerOne.rollDice();
    if ( result === false ) {
      $("#player1Roll").hide();
      $("#player2Roll").show();
      $("#player1Hold").hide();
      $("#player2Hold").show();
      $("#player1score").text(playerOne.tempScore);
    } else {
      $("#player1score").text(playerOne.tempScore);
    }
  }); // end button#player1Roll.click
  $("button#player2Roll").click(function(event) {
    event.preventDefault();
    var result = playerTwo.rollDice();
    if ( result === false ) {
      $("#player2Roll").hide();
      $("#player1Roll").show();
      $("#player2Hold").hide();
      $("#player1Hold").show();
      $("#player2score").text(playerTwo.tempScore);
    } else {
      $("#player2score").text(playerTwo.tempScore);
    }
  }); // end button#player1Roll.click
}); //end document.ready

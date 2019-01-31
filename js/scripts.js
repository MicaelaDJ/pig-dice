// ### Business Logic ### ----- -----
// var player DONE
// thing for turns DONE
// prototype for rolling DONE
// prototype for holding DONE
// totaling score
// changing turns
// player win
// restart game

function Player() { // Player constructor to create playerX objects
  this.tempScore = 0,
  this.totalScore = 0;
};

// Player Objects
var playerOne = new Player();
var playerTwo = new Player();

// playerX function to roll dice
Player.prototype.rollDice = function() {
  this.dice = Math.floor(Math.random() * 6) + 1; // Perfect maths
  $("#rollArea").text(this.dice);
  if ( this.dice === 1 ) { // if dice is 1
    this.tempScore = 0;
    return false; // return to playerX.rollDice result === false in UI
  } else if ( this.dice !== 1 ) {
    this.tempScore += this.dice;
    return this.tempScore; // return to playerX.rollDice 'else' in UI
  } else {
    alert("Error: That wasn't supposed to happen.");
    location.reload();
  };
}; // end of rollDice

// Player.prototype.winState = function() {
//   if (totalScore === 20) {
//     alert("You win");
//   } else {
//     alert("You suck");
//   }
// }; // end of win state

// ### User Interface ### ----- -----
$(document).ready(function() {
  $("button#player1Roll").click(function(event) {
    event.preventDefault();
    var result = playerOne.rollDice();
    if ( result === false ) { // if dice is 1
      // change player turn on roll 1
      $("#player1Roll").hide();
      $("#player2Roll").show();
      $("#player1Hold").hide();
      $("#player2Hold").show();
      $("#player1score").text(playerOne.tempScore); // if dice is 1, score is 0, print score 0
    } else { // if dice is not 1
      $("#player1score").text(playerOne.tempScore); // if dice is not 1, score is tempScore total, print tempScore until dice is 1 or hold
    };
  }); // end button#player1Roll.click
  $("button#player1Hold").click(function(event) {
    event.preventDefault();
    $("#player1total").text(playerOne.totalScore += playerOne.tempScore); // add turn score to total score on hold
    playerOne.tempScore = 0; // reset tempScore to 0 to prevent 'hold' mash cheat
    $("#player1score").text(playerOne.tempScore); // display that tempScore is now 0
    if (playerOne.totalScore >= 100) {
      setTimeout(function() { alert("You win!");},100);
    } else {
      //change player turn on hold
      $("#player1Roll").hide();
      $("#player2Roll").show();
      $("#player1Hold").hide();
      $("#player2Hold").show();
    }
  }); // end button#player1Hold.click
  $("button#player2Roll").click(function(event) {
    event.preventDefault();
    var result = playerTwo.rollDice();
    if ( result === false ) { // if dice is 1
      // change player turn on roll 1
      $("#player2Roll").hide();
      $("#player1Roll").show();
      $("#player2Hold").hide();
      $("#player1Hold").show();
      $("#player2score").text(playerTwo.tempScore); // if dice is 1, score is 0, print score 0
    } else { // if dice is not 1
      $("#player2score").text(playerTwo.tempScore); // if dice is not 1, score is tempScore total, print tempScore until dice is 1 or hold
    };
  }); // end button#player2Roll.click
  $("button#player2Hold").click(function(event) {
    event.preventDefault();
    $("#player2total").text(playerTwo.totalScore += playerTwo.tempScore); // add turn score to total score on hold
    playerTwo.tempScore = 0; // reset tempScore to 0 to prevent 'hold' mash cheat
    $("#player2score").text(playerTwo.tempScore); // display that tempScore is now 0
    if (playerTwo.totalScore >= 100) {
      setTimeout(function() { alert("You win!");},100);
    } else {
    // change player turn on hold
      $("#player2Roll").hide();
      $("#player1Roll").show();
      $("#player2Hold").hide();
      $("#player1Hold").show();
    }
  }); // end button#player2Hold.click
}); //end document.ready

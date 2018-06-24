var wins = 0
var losses = 0
var guessesLeft = 10
var guessesDone = []
var compChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeydown = function(event){
    var userGuess
    var compGuess = compChoice[Math.floor(Math.random()*compChoice.length)];
    guessesDone.push (userGuess);
    if (userGuess === compGuess) {
        wins++;
        alert("Way to get that W! Keep going!");
        guessesLeft = 0;
        guessesDone.length = 0;
    }
    else if (guessesLeft == 0) {
        losses++;
        alert("Womp! Womp! Womp! Better Luck Next Time!");
        guessesLeft = 0;
        guessesDone.length = 0;
    }
    // else if (userGuess !== compGuess){
    //     guessesLeft--;
    // }  
    else{
        guessesLeft--;
    }
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}














// GLOBAL VARIABLES

// Crystal variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

// FUNCTIONS

// Helper Function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the Game (and restarts the game)
var startGame = function() {

    // Reset current Score

    currentScore = 0;

    // Set a new Target Score between 19 and 120
    targetScore = getRandom(19, 120);

    // Set different values for each crystal between 1 and 12
    crystal.blue.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);

    // Change html to reflect all of these changes

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

}

// Respond to clicks on the crystals
var addValues = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect changes in current score
    $("#yourScore").html(currentScore);

    // Call the checkWin Function
    checkWin();

    // Testing Console
    console.log("Your Score: " + currentScore);
}

// Check if user won or lost and reset the game
var checkWin = function(){
    // Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry you lost");
        console.log("youlost");

        // add to Loss Counter
        lossCount++;

        // Change loss count html
        $("#lossCount").html(lossCount);

        // Restart the game
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("Great Job, you won");
        console.log("you won");

        // Add to Win Counter
        winCount++;

        // Change win count html
        $("#winCount").html(winCount);

        // Restart the game
        startGame();
    }

}

// MAIN PROCESS

startGame();

$("#red").click(function() {
    addValues(crystal.red);
});
$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
});
$("#green").click(function() {
    addValues(crystal.green);
});

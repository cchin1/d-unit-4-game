// Declare necessary variables
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var gemVals = [0,0,0,0];
var rubyIndex = 0;
var diamondIndex = 1;
var opalIndex = 2;
var emeraldIndex = 3;

// Functions

    //set the onload event
    window.onload=
        resetHTML();
        totalReset ();
    ;

    //reset the current score
    var counter = 0;

    //sets up random number user is trying to match
    function randomTargetNumber () {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log(targetNumber); 
    }
  
    /**
    * Returns a random integer between min (inclusive) and max (inclusive).
    * The value is no lower than min (or the next integer greater than min
    * if min isn't an integer) and no greater than max (or the next integer
    * lower than max if max isn't an integer).
    * Using Math.round() will give you a non-uniform distribution!
    */
    //function getRandomInt(min, max) {
    //min = Math.ceil(min);
    //max = Math.floor(max);
    //return Math.floor(Math.random() * (max - min + 1)) + min;
    //}

    //sets up random value for each of the crystals declared as variables from above
    function resetCrystals () {
        for (var i = 0; i < gemVals.length; i++) {
            gemVals[i] = Math.floor(Math.random() * 12);
            console.log(gemVals);
        }
    }
    //reset the html to reflect changes
    function resetHTML () {
        $("#randomTarget").html(targetNumber);
        $("#wins").html("<p>Wins: " + wins + "</p>");
        $("#losses").html("<p>Losses: " + losses + "</p>");
        $("#score").html("<p>Your Total Score is: " + score + "</p>");
        $("#Jewel").empty();
    }
    function totalReset () {
        randomTargetNumber ();
        counter = 0;
        resetHTML ();
        resetCrystals ();
    }
    // Main Process
        // Initial Page Setup
        randomTargetNumber();
        resetHTML ();
        resetCrystals ();

    // Setting up clicks on crystals (from the video)
    $("#ruby").click(function() {
        alert(gemVals[rubyIndex]);
    });
    $("#diamond").click(function() {
        alert(gemVals[diamondIndex]);
    });
    $("#opal").click(function() {
        alert(gemVals[opalIndex]);
    });
    $("#emerald").click(function() {
        alert(gemVals[emeraldIndex]);
    });

    // Click Functions
        function crystalClick () {
            //attr returns the first value of selected html element 
            counter += parseInt($(this).attr("value"));
            $(".score-number").html(counter);
            if (counter == targetNumber) {
                wins++;
                alert("you win");
                totalReset();
            }
            else if (counter > targetNumber) {
                losses++;
                alert("you lose");
                totalReset();
            };
        };
        
        //During the life of the game, account for every dynamic change by executing crystalClick function
        $(document).on("click", ".crystal", crystalClick);

// Declare necessary variables
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/ruby.jpg", "./assets/images/diamond.jpg", "./assets/images/opal.jpg", "./assets/images/emerald.jpg"];

// Functions

    //reset the current score
    var counter = 0;

    //sets up random number user is trying to match
    function randomTargetNumber () {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }
  
    //sets up random value for each of the crystals in the images array from above
    function resetCrystals () {
        for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 12) +1));
            crystal.attr("height", "100");
            $(".Jewel").append(crystal);
        }
    }
    //reset the html to reflect changes
    function resetHTML () {
        $(".randomTarget").html(targetNumber);
        $(".wins").html("<p>Wins: " + wins + "</p>");
        $(".losses").html("<p>Losses: " + losses + "</p>");
        $(".score").html("<p>Your Total Score is: " + score + "</p>");
        $(".Jewel").empty();
    }
    function totalReset () {
        randomTargetNumber ();
        counter = 0;
        resetHTML ();
        resetCrystals ();
    }
    // Code to run otherwise known as Main Process
        // Initial Page Setup
        randomTargetNumber();
        resetHTML ();
        resetCrystals ();

    // Setting up clicks on crystals (from the video)
    $("#ruby").click(function() {
        alert("test");
    });
    $("#diamond").click(function() {
        alert("test");
    });
    $("#opal").click(function() {
        alert("test");
    });
    $("#emerald").click(function() {
        alert("test");
    });

    // Click Functions
        function crystalClick () {
            //attr returns the first value of selected html element 
            counter += parseInt($(this).attr("value"));
            $(".score-number").html(counter);
            if (counter == targetNumber) {
                wins++;
                totalReset();
            }
            else if (counter > targetNumber) {
                losses++;
                totalReset();
            };
        };
        
        //During the life of the game, account for every dynamic change by executing crystalClick function
        $(document).on("click", ".crystal", crystalClick);

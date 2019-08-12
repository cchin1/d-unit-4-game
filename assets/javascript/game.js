
//sets up random number user is trying to match
$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $('#number').text(Random);

//	setting up four random numbers array, total variable and printing the wins & losses variables	
var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);		


//sets up random numbers for each jewel
function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    GeneratedNumbers.push(num);
}
console.log(GeneratedNumbers) 
}

fourRandomNumbers();


//resets the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#number').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('#Combined').text(total);
    } 

//adds the wins to the total
function yay(){
alert("You won!!!");
    wins++;	
    $('#numberWins').text(wins);
    reset();
}

//adds the losses to the total
function loser(){
alert ("You lose!!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}



//sets up click for jewels
    $('#one').on ('click', function(){
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                    //sets win/lose conditions
                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }		
    })	

    $('#two').on ('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#three').on ('click', function(){
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $('#Combined').text(total);

//sets win/lose conditions
                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#four').on ('click', function(){
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('#Combined').text(total);	

            
                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }
    });  	

});	






// Declare global variables


// Create the four crystals using for loop


// Generate a random number for each crystal, between 1 and 12



// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// The random number shown at the start of the game should be between 19 - 120.

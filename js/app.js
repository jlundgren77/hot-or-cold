
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    

  	//on load start new game
  	newGame();

    $('#guessButton').on("click", function(event){

    	event.preventDefault();
    	guess();

    });
  	
  	//start new game on click of new game button
    $('.new').on("click", function(event){
    	event.preventDefault();
    	newGame();
    })

});

//store random number
var num;
//store state of game play
var in_play;


function newGame(){
		in_play = true;
	    num = newNumber();
	    $('#count').text(0);
	    $('#feedback').text("Make your Guess!");
	    $('#guessList').text(" ");
	    document.getElementById("userGuess").value = "";
	    $("#guessButton").attr("value", "Guess");
	    $("#userGuess").prop('disabled', false);
	    console.log(num);
	    
    }

function newNumber(){
 	 return Math.floor(Math.random() * 100) + 1
    
 	}

function guess(){
	
    if(in_play == true){
		var guessInput = document.getElementById("userGuess").value;
		if (!numValidation(guessInput)){
			alert("Please Enter a Number Between 1 and 100")
		}
		else{
			 var guesslist = document.getElementById("guessList");
			 var newGuessItem = document.createElement("li");
			 var guess = document.createTextNode(guessInput);
			 newGuessItem.appendChild(guess);
			 guesslist.appendChild(newGuessItem);
			 updateCount();
			 feedback(guessInput);
			 if (guessInput == num) {
			 	$("#guessButton").attr("value", "Game Over");
			 	$("#userGuess").prop('disabled', true);
			 	in_play = false;
			 }
	         
		}
	}
	//prevent further input if number guessed
	else {

		return false;
	}
	//reset input
	document.getElementById("userGuess").value = "";
}


		

 function numValidation(guess) {
     var num = parseInt(guess);
     
 	if (num < 1 || num > 100|| isNaN(num))
 	{
 		return false;
 	}
 	
 	return true;

 }

function updateCount() {
	var count = document.getElementById('count');
	var current = count.innerHTML;
	newCount = parseInt(current) +1;
	count.innerHTML = newCount;
}

function feedback(guess){
	var feedback = document.getElementById("feedback");
	var guessDiff = Math.abs(guess - num);
	var msg = "";
	if (guessDiff >= 50){
		msg = "Ice Cold";
	}
	else if (guessDiff >= 30){
		msg = "Cold";
	}
	else if(guessDiff >= 20){
		msg = "Warm";
	}
	else if(guessDiff >= 10){
		msg = "Hot";
	}
	else if(guessDiff >=1){
		msg = "Very Hot";
	}
	else {
		msg = "Bingo! Play Again?";


	}
	
	feedback.innerHTML = msg;
	
}


 
 
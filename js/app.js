
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    

  	
  	newGame();
    $('#guessButton').on("click", function(event){

    	event.preventDefault();
    	guess();

    });
  	
    $('.new').on("click", function(event){
    	event.preventDefault();
    	newGame();
    })

});

var num;
var in_play;
function newGame(){
	    num = newNumber();
	    $('#count').text(0);
	    $('#feedback').text("Make your Guess!");
	    $('#guessList').text(" ");
	    $('#userGuess').text("Enter Your Guess");
	    in_play = true;
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
			 	in_play = false;
			 }
	         console.log(in_play);
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
     console.log(num);
 	if (num < 1 || num > 100|| isNaN(num))
 	{
 		return false;
 	}
 	// else if ($.isNumeric(num))
 	// {
 	// 	return false;
 	// }
 	

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
		$('#userGuess').text("Click Play Again");
	}
	
	feedback.innerHTML = msg;
	
}


 
 
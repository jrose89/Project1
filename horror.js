function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
  var question12 = document.quiz.question12.value;
  var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
  var question15 = document.quiz.question15.value;
	var correct = 0;



	if (question1 == "Jason Voorhees") {
		correct++;
}

	if (question2 == "146") {
		correct++;
}	

	if (question3 == "666") {
		correct++;
  }
  
  if (question4 == "Freddy Krueger") {
    correct++;
  }

  
  if (question5 == "The Exorcist") {
    correct++;
  }
  
  if (question6 == "Psycho, Silence of the Lambs, The Texas Chainsaw Massacre") {
    correct++;
  }
  
  if (question7 == "William Shatner") {
    correct++;
  }
  
  if (question8 == "Pazuzu") {
    correct++;
  }
  
  if (question9 == "1") {
    correct++;
  }
  
  if (question10 == "Poltergeist") {
    correct++;
  }
  
  if (question11 == "Evil Dead") {
    correct++;
  }
  
  if (question12 == "Dracula") {
    correct++;
  }
  
  if (question13 == "Space Vampires") {
    correct++;
  }
  
  if (question14 == "Monkey") {
    correct++;
  }

  if (question15 == "Bruce") {
    correct++;
  }

	

	var pictures = ["img/jason_voorhees.jpeg", "img/fvj.jpeg", "img/lose.jpeg"];
	var messages = ["You are a the Master", "Close, but no cigar", "Wow, you suck"];
	var score;


	if (correct == 0) {
		score = 15;
	}


	if (correct > 0 && correct < 15) {
		score = 1;
	}


	if (correct == 15) {
		score = 0;
	}



	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];

	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

  document.getElementById("picture").src = pictures[score];
}
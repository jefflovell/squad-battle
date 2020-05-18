var currentPuzzle = -1;
var score = 0;
var redScore = 0;
var blueScore = 0;
var answer1counter = 0;
var answer2counter = 0;
var answer3counter = 0;
var answer4counter = 0;
var answer5counter = 0;
var answer6counter = 0;
var answer7counter = 0;
var answer8counter = 0;

function newPuzzle(){
	//IDs to set answer HTML
	var gameBoard = [
						"#__answer1",
						"#__answer2",
						"#__answer3",
						"#__answer4",
						"#__answer5",
						"#__answer6",
						"#__answer7",
						"#__answer8"
					];
	//iterate the count to pull the next puzzle
	currentPuzzle++;
	console.log("puzzle changed to: " + currentPuzzle);

	//reset the counters for toggling answers for each puzzle
	answer1counter = 0;
	answer2counter = 0;
	answer3counter = 0;
	answer4counter = 0;
	answer5counter = 0;
	answer6counter = 0;
	answer7counter = 0;
	answer8counter = 0;

	//reset the score for each puzzle
	score = 0;
	$("#__score").html(score);

	//loop back to the first Puzzles index 
	if(currentPuzzle === puzzles.length){
		currentPuzzle = 0;
	}

	//reset the game board
	if($("#__question").hasClass("question-flipped")){
		$("#__question").removeClass("question-flipped");
		$("#__question").addClass("question-default");
		$("#__question-text").html("");
	}

	//reveal a new question
	$("#__question").removeClass("question-default");
	$("#__question").addClass("question-flipped");
	$("#__question-text").html(puzzles[currentPuzzle].question);

	//loop over the answer element IDs and reset the style and content
	gameBoard.forEach(function(el, i){
		if($(el).hasClass("answer-flipped")){
			$(el).removeClass("answer-flipped");
			$(el).addClass("answer-default");
			$("#__text" + (i + 1)).html("");
			$("#__points" + (i + 1)).html("");
		}
	});

	//loop over the answers array for the current puzzle and write the answer to the correct html element
	puzzles[currentPuzzle].answers.forEach(function(el, i){
		var answerEl = "#__answer" + (i + 1);
		var textEl = "#__text" + (i + 1);
		var pointsEl = "#__points" + (i + 1);
			if(el.text !== null){
			$(answerEl).removeClass("answer-default");
			$(answerEl).addClass("answer-flipped");
			$(textEl).html(el.text);
			$(textEl).toggleClass("hidden", true);
			$(pointsEl).html(el.points);
			$(pointsEl).toggleClass("hidden", true);
		}
	});
};

$("body").click(function(el){
		console.log(el.target);
		if($(el.target).parents().is("#__answer1") && $("#__answer1").hasClass("answer-flipped") && answer1counter === 0){
			$("#__text1").toggleClass("hidden", false);
			$("#__points1").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[0].points;
			$("#__score").html(score);
			answer1counter++;
			return;
		}
		if($(el.target).parents().is("#__answer1") && $("#__answer1").hasClass("answer-flipped") && answer1counter === 1){
			$("#__text1").toggleClass("hidden", true);
			$("#__points1").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[0].points;
			$("#__score").html(score);
			answer1counter--;
			return;
		}
		if($(el.target).parents().is("#__answer2") && $("#__answer1").hasClass("answer-flipped") && answer2counter === 0){
			$("#__text2").toggleClass("hidden", false);
			$("#__points2").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[1].points;
			$("#__score").html(score);
			answer2counter++;
			return;
		}
		if($(el.target).parents().is("#__answer2") && $("#__answer2").hasClass("answer-flipped") && answer2counter === 1){
			$("#__text2").toggleClass("hidden", true);
			$("#__points2").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[1].points;
			$("#__score").html(score);
			answer2counter--;
			return;
		}
		if($(el.target).parents().is("#__answer3") && $("#__answer3").hasClass("answer-flipped") && answer3counter === 0){
			$("#__text3").toggleClass("hidden", false);
			$("#__points3").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[2].points;
			$("#__score").html(score);
			answer3counter++;
			return;
		}
		if($(el.target).parents().is("#__answer3") && $("#__answer3").hasClass("answer-flipped") && answer3counter === 1){
			$("#__text3").toggleClass("hidden", true);
			$("#__points3").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[2].points;
			$("#__score").html(score);
			answer3counter--;
			return;
		}
		if($(el.target).parents().is("#__answer4") && $("#__answer4").hasClass("answer-flipped") && answer4counter === 0){
			$("#__text4").toggleClass("hidden", false);
			$("#__points4").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[3].points;
			$("#__score").html(score);
			answer4counter++;
			return;
		}
		if($(el.target).parents().is("#__answer4") && $("#__answer4").hasClass("answer-flipped") && answer4counter === 1){
			$("#__text4").toggleClass("hidden", true);
			$("#__points4").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[3].points;
			$("#__score").html(score);
			answer4counter--;
			return;
		}
		if($(el.target).parents().is("#__answer5") && $("#__answer5").hasClass("answer-flipped") && answer5counter === 0){
			$("#__text5").toggleClass("hidden", false);
			$("#__points5").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[4].points;
			$("#__score").html(score);
			answer5counter++;
			return;
		}
		if($(el.target).parents().is("#__answer5") && $("#__answer5").hasClass("answer-flipped") && answer5counter === 1){
			$("#__text5").toggleClass("hidden", true);
			$("#__points5").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[4].points;
			$("#__score").html(score);
			answer5counter--;
			return;
		}
		if($(el.target).parents().is("#__answer6") && $("#__answer6").hasClass("answer-flipped") && answer6counter === 0){
			$("#__text6").toggleClass("hidden", false);
			$("#__points6").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[5].points;
			$("#__score").html(score);
			answer6counter++;
			return;
		}
		if($(el.target).parents().is("#__answer6") && $("#__answer6").hasClass("answer-flipped") && answer6counter === 1){
			$("#__text6").toggleClass("hidden", true);
			$("#__points6").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[5].points;
			$("#__score").html(score);
			answer6counter--;
			return;
		}
		if($(el.target).parents().is("#__answer7") && $("#__answer7").hasClass("answer-flipped") && answer7counter === 0){
			$("#__text7").toggleClass("hidden", false);
			$("#__points7").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[6].points;
			$("#__score").html(score);
			answer7counter++;
			return;
		}
		if($(el.target).parents().is("#__answer7") && $("#__answer7").hasClass("answer-flipped") && answer7counter === 1){
			$("#__text7").toggleClass("hidden", true);
			$("#__points7").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[6].points;
			$("#__score").html(score);
			answer7counter--;
			return;
		}
		if($(el.target).parents().is("#__answer8") && $("#__answer8").hasClass("answer-flipped") && answer8counter === 0){
			$("#__text8").toggleClass("hidden", false);
			$("#__points8").toggleClass("hidden", false);
			score += puzzles[currentPuzzle].answers[7].points;
			$("#__score").html(score);
			answer8counter++;
			return;
		}
		if($(el.target).parents().is("#__answer8") && $("#__answer8").hasClass("answer-flipped") && answer8counter === 1){
			$("#__text8").toggleClass("hidden", true);
			$("#__points8").toggleClass("hidden", true);
			score -= puzzles[currentPuzzle].answers[7].points;
			$("#__score").html(score);
			answer8counter--;
			return;
		}
	});

console.log("Javascript Loaded");

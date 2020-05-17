var currentPuzzle = -1;
var score = 0;
var redScore = 0;
var blueScore = 0;

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

console.log("Javascript Loaded");

function revealAnswer(text, points, i){
	//unhide the answer
	$(text).toggleClass("hidden", false);
	//unhide the points
	$(points).toggleClass("hidden", false);
	//add the points to the puzzle score
	score += puzzles[currentPuzzle].answers[i].points;
	$("#__score").html(score);
};

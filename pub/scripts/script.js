var currentPuzzle = 0;

function newPuzzle(){
	if(currentPuzzle === puzzles.length){
		currentPuzzle = 0;
	}
	$(".__question").html(puzzles[currentPuzzle].question);
	$(".__answer1").html(puzzles[currentPuzzle].answers[0].text);
	$(".__points1").html(puzzles[currentPuzzle].answers[0].points);
	$(".__answer2").html(puzzles[currentPuzzle].answers[1].text);
	$(".__points2").html(puzzles[currentPuzzle].answers[1].points);
	$(".__answer3").html(puzzles[currentPuzzle].answers[2].text);
	$(".__points3").html(puzzles[currentPuzzle].answers[2].points);
	$(".__answer4").html(puzzles[currentPuzzle].answers[3].text);
	$(".__points4").html(puzzles[currentPuzzle].answers[3].points);
	$(".__answer5").html(puzzles[currentPuzzle].answers[4].text);
	$(".__points5").html(puzzles[currentPuzzle].answers[4].points);
	$(".__answer6").html(puzzles[currentPuzzle].answers[5].text);
	$(".__points6").html(puzzles[currentPuzzle].answers[5].points);
	$(".__answer7").html(puzzles[currentPuzzle].answers[6].text);
	$(".__points7").html(puzzles[currentPuzzle].answers[6].points);
	$(".__answer8").html(puzzles[currentPuzzle].answers[7].text);
	$(".__points8").html(puzzles[currentPuzzle].answers[7].points);
	console.log(currentPuzzle);
	currentPuzzle++;
	console.log(currentPuzzle);
};

console.log("Javascript Loaded");
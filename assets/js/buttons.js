// Using jQuery to start up the buttoncardShuffle function on page load

document.addEventListener("DOMContentLoaded", function() {
	buttoncardShuffle();
});

// This is the onclick function, when blue or green button is clicked

function buttonClicktext() {
	document.getElementById("game-title").style.display = "none";
	document.getElementById("question").style.display = "block";
	document.getElementById("needHelp").style.display = "block";
}

// This is the onclick function, when user clicks on the "Need Help? Click Here"

function helpText() {
	document.getElementById("animal-row").style.display = "none";
	document.getElementById("button-row").style.display = "none";
	document.getElementById("portrait-advice").style.display = "none";
	document.getElementById("help-row").style.display = "block";
}





// This is the onclick function, (page refresh) for restart button

function buttonRestart() {

	window.location.reload();

}

// This is the onclick function, for the shuffle button, blue button.

function buttoncardShuffle() {

	// array of animal pictures:	

	var animals = ['frog', 'cow', 'hen', 'horse', 'cat', 'bunny', 'dog', 'donkey', 'duck', 'lamb', 'pig', 'tractor'];
	var imgs = [];

	// This is the function thats creates a string of the file path of choosen animal pic

	animals.forEach(function(animal) {
		var string = '<img src="assets/images/' + animal + '.jpg">';
		imgs.push(string);
	});

	var randomPic1 = imgs[Math.floor(Math.random() * imgs.length)];
	var randomPic2 = imgs[Math.floor(Math.random() * imgs.length)];
	var randomPic3 = imgs[Math.floor(Math.random() * imgs.length)];


	// The If / Return statements, ensuring that no dublicates of pictures occur for each shuffle:	

	document.getElementById("card1").innerHTML = randomPic1;
	if (randomPic1 === randomPic2) {
		return buttoncardShuffle();
	}
	if (randomPic1 === randomPic3) {
		return buttoncardShuffle();
	}

	document.getElementById("card2").innerHTML = randomPic2;
	if (randomPic2 === randomPic1) {
		return buttoncardShuffle();
	}
	if (randomPic2 === randomPic3) {
		return buttoncardShuffle();
	}

	document.getElementById("card3").innerHTML = randomPic3;
	if (randomPic3 === randomPic1) {
		return buttoncardShuffle();
	}
	if (randomPic3 === randomPic2) {
		return buttoncardShuffle();
	}

	//	console.log(randomPic1);
	//	console.log(randomPic2);
	//	console.log(randomPic3);

}

// This is the onclick function, when green button is clicked on, it makes welcome text div disappear and and other div appear instead. Also plays a sound file. 

function buttonQuestion() {

	//  1 random animal sound generated when green button is pressed:	

	var cowSound = new Audio();
	cowSound.src = "assets/audio/cow-bellow.mp3";

	var henSound = new Audio();
	henSound.src = "assets/audio/hen-sound.mp3";

	var horseSound = new Audio();
	horseSound.src = "assets/audio/horse-sound.mp3";

	var animalsoundArray = new Array(cowSound, henSound, horseSound);

	var randomSound = animalsoundArray[Math.floor(Math.random() * animalsoundArray.length)];

	randomSound.play();
}

// Variables declared, right/wrong answer sounds, not implemented yet...

var wronganswerSound = new Audio();
wronganswerSound.src = "assets/audio/incorrect-sound.mp3";

var rightanswerSound = new Audio();
rightanswerSound.src = "assets/audio/cheering.mp3";


// This is the onclick function, when images are click on, but I need to match the pictures to the sound file played...?

function redBox() {
	document.getElementById("card1", "card2", "card3").style.border = "15px solid red";
	wronganswerSound.play();
}

function greenBox() {
	document.getElementById("card1", "card2", "card3").style.border = "15px solid green";
	rightanswerSound.play();
}

// This is the onclick function, for the shuffle button (blue button), to make sound effect when clicked.

function shuffleSound() {
	var shuffleSound = new Audio();
	shuffleSound.src = "assets/audio/shuffle.mp3";
	shuffleSound.play();
}

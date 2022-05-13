// Typed.js | https://github.com/mattboldt/typed.js

var typed = new Typed('#splash-screen-text', {
	strings:["CLICK HERE TO ENTER"],
	typeSpeed: 40,
	backSpeed: 40,
	loop: false
});


// Grained.js | http://sarathsaleem.github.io/grained/#2

var grainOptionsSplash = {
	"animate": true,
	"patternWidth": 500,
	"patternHeight": 500,
	"grainOpacity": 0.2,
	"grainDensity": 4,
	"grainWidth": 4,
	"grainHeight": 1
}

grained("#splash-screen", grainOptionsSplash);


//TV Variables

var video = document.getElementById("screen");
var	container = document.getElementById("container");
var	overlay = document.getElementById("overlay");

var films = ["media/videos/model_shoot.mp4", "media/videos/edu_vid.mp4", "media/videos/promo_vid.mp4"]; //Add all "channels" here
var channelIndicator = ["WI-1", "WI-2", "WI-3"]; //Add all "channels indicators" here

//Button Variables

var onOffButton = document.getElementById("onOff-btn");
var channelUpButton = document.getElementById("chnlUp-btn");
var channelDownButton = document.getElementById("chnlDown-btn");
var toggleMuteButton = document.getElementById("toggleMute-btn");
var playButton = document.getElementById("play-btn");
var pauseButton = document.getElementById("pause-btn");

//Init Buttons

var onOffBool = false;
var channelUpBool= false;
var channelDownBool = false;
var toggleMuteBool = false;
var channelCount = 0;

//The Brains

function tvOnOff() {

	if (onOffBool === false) {
		onOffBool = true;
		video.muted = false;
		video.src = films[channelCount];
		video.classList.remove("screeneffectoff");
		video.classList.add("screeneffecton");
		container.classList.add("flicker");
		overlay.classList.add("overlayon");
		overlay.innerHTML = channelIndicator[channelCount];
		// console.log("TV is on by main button");
	}
	else {
		onOffBool = false;
		video.muted = true;
		video.classList.add("screeneffectoff");
	   	video.classList.remove("screeneffecton");
		container.classList.remove("flicker");
		overlay.classList.remove("overlayon");
		// console.log("TV is off by main button");
	}
};

function tvOn() {

	if (onOffBool === false) {
		onOffBool = true;
		video.muted = false;
		video.src = films[channelCount];
		video.classList.remove("screeneffectoff");
		video.classList.add("screeneffecton");
		container.classList.add("flicker");
		overlay.classList.add("overlayon");
		overlay.innerHTML = channelIndicator[channelCount];
		// console.log("Tv is on");
	}
};

function toggleMute() {
	if (onOffBool === true) {
		if (video.muted === false)  {
			video.muted = true;
			toggleMuteBool = true;
			// console.log("Muted");
		}
		else {
			video.muted = false;
		    toggleMuteBool = false;
			// console.log("Unmuted");
		}
	}
};

function channelChange(direction) {

	if (onOffBool === true) {
		if (direction === 'up') {
			channelCount = (channelCount + 1) % films.length;
			// console.log("channelCount = " + channelCount);
		}

		if (direction === 'down') {
			if (channelCount === 0) {
				channelCount = (films.length - 1) % films.length;
				// console.log("channelCount = " + channelCount);
			}	
			else {
				channelCount = (channelCount - 1) % films.length;
				// console.log("channelCount = " + channelCount);
			}
		}

		video.src = films[channelCount];
    	overlay.innerHTML = channelIndicator[channelCount];

    	if (overlay.classList.contains("overlayon")) {
			overlay.classList.remove("overlayon");
			setTimeout(function(){ overlay.classList.add("overlayon"); }, 10);
		}
	}
};

// Only call splash screen once

const splashOn = 'On';
const splashOff = 'Off';
const splashDefaultMode = 'On';
const splashHideToggle = document.getElementById("splash-screen-container");
let storedDataSplash = sessionStorage.getItem('dataSplash');

// Set storage to default splash mode

function initDefaultSplashValue() {
    if (!storedDataSplash) {
        storedDataSplash = splashDefaultMode;
        sessionStorage.setItem('dataSplash', splashDefaultMode);
    }
};

initDefaultSplashValue();

// Change sessionStorage for dataSplash on click

splashHideToggle.addEventListener('click', function () {
    sessionStorage.setItem('dataSplash', splashOff);
});

// Render page based on session storage for splash

function renderIndexPage(splashScreenVal) {

	const splashScreenContainer = document.querySelector("#splash-screen-container");
	const splashScreen = document.querySelector("#splash-screen");
	const mainLandingPage = document.querySelector("#main-landing-page");

	if (splashScreenVal === "Off") {
		splashScreen.style.display = "none";
		mainLandingPage.style.display = "block";
		tvOn();
	} else {
		mainLandingPage.style.display = "none";
		splashScreenContainer.addEventListener("click", function() {
			splashScreen.style.display = "none";
			mainLandingPage.style.display = "block";
			tvOn();
		});
	}
};

renderIndexPage(storedDataSplash);

// Animations 
// https://github.com/juliangarnier/anime/ | https://animejs.com/documentation/
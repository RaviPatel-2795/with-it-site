// Dark/Light Mode

const darkMode = 'dark';
const lightMode = 'light';
const defaultMode = lightMode;

const themeToggle = document.getElementById("themeModeCheck");

// Set storage to default Theme mode

function themeInit() {
    let storedDataTheme = sessionStorage.getItem('dataTheme');
    if (!storedDataTheme) {
        storedDataTheme = defaultMode;
        sessionStorage.setItem('dataTheme', defaultMode);
    }
    setMode(storedDataTheme);
};

themeInit();

// Definition of different scenarios based on mode

function setMode(mode = defaultMode) {
    if (mode === darkMode) {
		document.documentElement.setAttribute('data-theme', darkMode);
		themeToggle.checked = true;

    } else if (mode === lightMode) {
		document.documentElement.setAttribute('data-theme', lightMode);
		themeToggle.checked = false;
    }
};

// Change sessionStorage for dataTheme on click

themeToggle.addEventListener('click', function () {
    let mode = sessionStorage.getItem('dataTheme');
    if (mode) {
        let newMode = mode == darkMode ? lightMode : darkMode;
        setMode(newMode);
        sessionStorage.setItem('dataTheme', newMode);
    }
});

// Hamburger Nav & Overlay

var hamburger = document.querySelector("#hamburger");
    mainOverlay = document.querySelector("#main-overlay");
    overlayNav = document.querySelector("#overlay-nav");
    logoBtn = document.querySelector("#logo-btn");

hamburger.addEventListener("click", function() {
    
	hamburger.classList.toggle("is-active");
    mainOverlay.classList.toggle("active");
	logoBtn.classList.toggle("active");
	overlayNav.classList.toggle("active");

	if (overlayNav.style.display === "block") {
		overlayNav.style.display = "none";
	} else {
		overlayNav.style.display = "block";
	}
});

// Render Navigation Bar

function generateNav() {
	//Add all nav text below
	var navLinkText = ["Shop", "Home", "Vision", "Campaigns", "Documentary", "Our Story"];
	//Add all nav links below
	var navLinks = ['a target="_blank" href="https://wardrobe.withit.app/"', 'a href="index.html"','a href="our_vision.html"', 'a href="campaigns.html"', 'a href="documentary.html"', 'a href="our_story.html"'];
	var listNav = '';
	var renderNav = '';
	
	for (let link in navLinkText) {
		listNav += `<li><${navLinks[link]}>${navLinkText[link]}</a></li>`;
	};

	renderNav = `<ul> ${listNav} </ul>`

	document.getElementById("overlay-nav").innerHTML = renderNav;
	document.getElementById("sidebar-nav").innerHTML = renderNav;
}

// Grained.js

var grainOptionsLanding = {
	"animate": true,
	"patternWidth": 500,
	"patternHeight": 500,
	"grainOpacity": 0.1,
	"grainDensity": 1,
	"grainWidth": 1,
	"grainHeight": 1
};


// Render Template

function renderBoilerplate() {
    const mainLandingPage = document.querySelector("#main-landing-page");

		mainLandingPage.style.display = "block";
		grained("#static-bg", grainOptionsLanding);
		generateNav();

};

renderBoilerplate();
function updateView() {
	let el0 = document.getElementById("title_name");
	el0.style.height = "8vh";

	let el1 = document.getElementById("title_therapy");
	el1.style.height = "10vh";
	el1.style.fontSize = "48px";	

	let el2 = document.getElementById("visual");
	el2.style.height = "15vh";
	el2.style.borderBottom = "5px solid rgba(0,0,0,0.1)"

	let el3 = document.getElementById("continue");
	el3.style.opacity = 0;
	el3.style.height = "0vh";
	el3.display = "hidden";
}

window.addEventListener('mousewheel', updateView);

var sessions_tab 		= document.getElementById("sessions");
var about_tab 			= document.getElementById("about");
var qualifications_tab 	= document.getElementById("qualifications");
var tabs 				= document.getElementById("tabs");

sessions_tab.addEventListener('click', function() {
	tabs.style.transform="translateX(100vw)";
	sessions_tab.classList.add("selected");
	about_tab.classList.remove("selected");
	qualifications_tab.classList.remove("selected");
});

about_tab.addEventListener('click', function() {
	tabs.style.transform="translateX(0vw)";
	sessions_tab.classList.remove("selected");
	about_tab.classList.add("selected");
	qualifications_tab.classList.remove("selected");
});

qualifications_tab.addEventListener('click', function() {
	tabs.style.transform="translateX(-100vw)";
	sessions_tab.classList.remove("selected");
	about_tab.classList.remove("selected");
	qualifications_tab.classList.add("selected");
});
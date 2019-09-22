const img_focus = document.getElementById("img_focus");
const img_bg = document.querySelectorAll(".img_bg");
const clip = document.getElementById("clip");
const fader  = document.getElementById("fader");
const fader_logo = document.getElementById("name_large");
const button_train = document.getElementById("nav_button_train");

const html_reference = document.getElementById("reference");
const content = document.getElementById("content_body");

var i = 0;

function getObjectHTML(i) {
	return `<object id="reference" data="view${i}.html" class="content_text"> 
	Object not loaded or your browser doesn’t support the object tag.
	</object>`;
}

function fadeIn() {
	img_focus.classList.add("fadeIn");
	img_focus.classList.remove("fadeOut");
	clip.classList.add("glass");
	fader_logo.style.opacity = 0;
}
function fadeOut() {
	img_focus.classList.add("fadeOut");
	img_focus.classList.remove("fadeIn");
	fader_logo.style.opacity = 1;
}
function rotateBg(n) {
	content.innerHTML = getObjectHTML(n);
	img_bg.forEach(x => x.style.backgroundImage = `url(${n}.png)`);
	clip.classList.remove("glass");
}

function go_right() {
	if (i < 3){
			i++;
		} else {
			i=0;
		}
	fadeOut();
	setTimeout(function(){	rotateBg(i);	},250);
	setTimeout(function(){	fadeIn();		},750);
}
function go_left() {
	if (i > 0){
			i--;
		} else {
			i=3;
		}
	fadeOut();
	setTimeout(function(){	rotateBg(i);	},250);
	setTimeout(function(){	fadeIn();		},750);
}
function open_menu() {
	button_train.style.transform = "translate(-5px, 5px)";
}
function close_menu() {
	button_train.style.transform = "translate(100%, 5px)";	
}
function goTo(n) {
	if (n != i) 
	{
		i = n;
		fadeOut();
		setTimeout(function(){	rotateBg(i);	},250);
		setTimeout(function(){	fadeIn();		},750);
		}
}

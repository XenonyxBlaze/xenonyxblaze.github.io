// Age code inspired from ottomated's portfolio. Hopefully he doesn't mind it much. He's only 10 days older than me :O
"use strict";
console.log("Hello World")
console.log("Welcome to my site")
console.log("Hello, did you find this easter egg ?? lemme know on discord ;)")

let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(2003,2,19,0,30)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);

let nameEl = document.getElementById("name");
let tName = "My real name is Aarav Rajput.".split("");
let rName = ""

//typewriter animation for intro

let i = 0;
let lenTName = tName.length;
function nextChar() {
	rName += tName[i];
	nameEl.innerText = rName;
	i++;
	if (i < lenTName) {
		setTimeout(nextChar,100);
	}
}


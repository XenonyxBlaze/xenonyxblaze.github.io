// Age code inspired from ottomated's portfolio. Hopefully he doesn't mind it much. He's only 10 days older than me :O
console.log("Hello World")
console.log("Welcome to my site")
console.log("Hello, did you find this easter egg ?? lemme know on discord ;)")

let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(1045593960000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);

let nameEl = document.getElementById("name");
let tName = ['','','_','A','A_','A','Aa_','Aa','Aa_','Aar_','Aar','Aar_','Aara_','Aara','Aara_','Aarav_','Aarav','Aarav_','Aarav _','Aarav ','Aarav _','Aarav R_','Aarav R','Aarav R_','Aarav Ra_','Aarav Ra','Aarav Ra_','Aarav Raj_','Aarav Raj','Aarav Raj_','Aarav Rajp_','Aarav Rajp','Aarav Rajp_','Aarav Rajpu_','Aarav Rajpu','Aarav Rajpu_','Aarav Rajput_','Aarav Rajput'];


//Make it look cooler by having my name display as being typed
// Idea taken from otto's portfolio but code written by me :)

let i = 0;
function nextChar() {
	nameEl.innerText = tName[i];
	i++;
	if (i < tName.length) {
		setTimeout(nextChar,100);
	}
}


//didn't expect otto's code would be similar to this but istg i wrote it on my own

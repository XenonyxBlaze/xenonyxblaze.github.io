// Age code taken from ottomated's portfolio. Hopefully he doesn't mind it much. He's only 10 days older than me :O

let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(1045593960000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 10);
}, 500);

let nameEl = document.getElementById("name");
let tName = ['','','_','A','A_','Aa','Aa_','Aar','Aar_','Aara','Aara_','Aarav','Aarav_'];
let cName=['Aarav','Aarav_'];

//Make it look cooler by having my name display as being typed
// Idea taken from otto's portfolio but code written by me :)

let i = 0;
function nextChar() {
	nameEl.innerText = tName[i];
	i++;
	if (i < tName.length) {
		setTimeout(nextChar,200);
	} else {
		i = 0;
		setTimeout(() => {
			setInterval(() => {
				nameEl.innerText = cName[i]
				i++
				if (i>1) {
					i=0;
				}
			}, 200);
		}, 500);
	}
}

nextChar();

//didn't expect otto's code would be similar to this but istg i wrote it on my own


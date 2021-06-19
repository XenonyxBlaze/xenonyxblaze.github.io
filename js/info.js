// Age code taken from ottomated's portfolio. Hopefully he doesn't mind it much. He's only 10 days older than me :O

let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(1045593960000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 11);
}, 500);

let nameEl = document.getElementById("name");

let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let oName = '';

//Make it look cooler by having my name display as randomised letters :)

setInterval(() => {	
	//nameEl.innerText = (Math.floor(Math.random()*26)+1).toString()
	for (let i = 0; i < 5; i++) {
		oName += alpha[(Math.floor(Math.random()*26))]
	}
	oName = oName.slice(0,1).toUpperCase() + oName.slice(1,5)
	if (oName=='Aarav') {
	// This code alerts if the randomised letters become my actual name which is a 1 in 11881376 chance :)
		window.alert('You have been luckily shown my real name. Screenshot and share this with me :)')
	}
	nameEl.innerText = oName
	oName=''
},100);

// Typewriter effect of writing console.log commands 
// looks cool

let mainEl = document.getElementById('main')

let consoleEl = document.getElementById('console');
consoleEl.style.backgroundColor = 'rgb(0,0,0)'

let comm1 = "               >console.log(\"Hello World\");\n>console.log(\"Welcome to my site\");".split("");

let x = 0;
let comm2 = "";
let start = () => {
    
    comm2 += comm1[x];
    consoleEl.innerText = comm2;
    x++
    if (x<comm1.length) {
        setTimeout(start,100)
    } else {
        setTimeout(() => {
            consoleEl.classList.add('d-none');
            mainEl.classList.remove('d-none');
            nextChar();
        }, 2000);
    }
}
start();
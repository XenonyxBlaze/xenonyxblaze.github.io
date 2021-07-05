// Typewriter effect of writing console.log commands 
// looks cool
"use strict";
let mainEl = document.getElementById('main')

let consoleEl = document.getElementById('console');
consoleEl.style.backgroundColor = 'rgb(0,0,0)'

let comm1 = ">console.log(\"Hello World\");\n>console.log(\"Welcome to my site\");".split("");

let x = 0;
let comm2 = "";
let start = () => {
    
    comm2 += comm1[x];
    consoleEl.innerText = comm2;
    x++
    if (x<comm1.length) {
        setTimeout(start,50)
    } else {
        setTimeout(() => {
            consoleEl.classList.add('d-none');
            mainEl.classList.remove('d-none');
            nextChar();
        }, 500);
    }
}

// function to set a cookie for a day
let setCookie = (cName,cValue) => {
    const d = new Date() + 24*60*60*1000;
    document.cookie = cName + "=" + cValue + ";expires=" + d.toString() +";path=/;";
}

//function to fetch value of cookie

let getCookie = (cookieName) => {
    let name = cookieName + "=";
    let cookers = decodeURIComponent(document.cookie).split();
    for (let i = 0; i < cookers.length; i++) {
        let curCock = cookers[i]
        while (curCock.charAt(0)==' ') {
            curCock.substring(1);
        }
        if (curCock.indexOf(cookieName)==0) {
            return curCock.substring(cookieName.length, curCock.length);
        }
    }
    return "";
}

//Checks for cookie that's stored to see if it is first time thwat user has visited

let firstVisit = () => {
    let isFirst = getCookie("isFirst");
    if (isFirst!="") {
        consoleEl.classList.add('d-none');
        mainEl.classList.remove('d-none');
        nextChar();
    } else {
        start();
        setCookie("isFirst","false")
    }
}

firstVisit();

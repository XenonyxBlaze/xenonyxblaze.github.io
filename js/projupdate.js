"use strict";
const pyCont = document.getElementById('insertPyProjs');
const webCont = document.getElementById('insertWebProjs')

async function getJsonFile() {
    let jsonFetch = await ((await fetch("js/projs.json")).text());
    //let jsonText = await jsonFetch.text();
    let jsonResp = JSON.parse(jsonFetch);
    processJSON(jsonResp);
}

getJsonFile();

let processJSON = (jsonObj) => {
    const pyProjsObj = jsonObj.pyProjects;
    const webProjsObj = jsonObj.webProjects;

    let insertProj = (obj,parnt) => {
        //Create div element
        let projDiv = document.createElement('div');
        projDiv.setAttribute('class','bg-white text-dark p-2');

        //Project name
        let projName = document.createElement('h2');
        projName.setAttribute('class','h2 text-primary');
        projName.innerText = obj.name;

        //Project description
        let projDesc = document.createElement('h6');
        projDesc.setAttribute('class','mx-2');
        projDesc.innerText = obj.desc;

        //Git
        let projGitLink = document.createElement('a')
        projGitLink.setAttribute('class','btn btn-white')
        projGitLink.setAttribute('href',obj.git)

        let gitImg = document.createElement('img');
        gitImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg');
        gitImg.setAttribute('height','40px');
        gitImg.setAttribute('width','40px');

        projGitLink.appendChild(gitImg);

        //Appending children
        parnt.appendChild(projDiv);
        projDiv.appendChild(projName);
        projDiv.appendChild(projDesc);
        projDiv.appendChild(projGitLink);

        //if project has dedicated website
        if (obj.hasWeb) {
            let projWebLink = document.createElement('a');
            projWebLink.setAttribute('class','btn btn-white');
            projWebLink.setAttribute('href',obj.web);

            let webImg = document.createElement('img');
            webImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/High-contrast-applications-internet.svg/1200px-High-contrast-applications-internet.svg.png');
            webImg.setAttribute('height','40px');
            webImg.setAttribute('width','40px');

            projWebLink.appendChild(webImg);
            projDiv.appendChild(projWebLink);
        }
    }
    pyProjsObj.forEach(project => {
        insertProj(project,pyCont);
        pyCont.appendChild(document.createElement('hr'));
    });
    webProjsObj.forEach(project => {
        insertProj(project,webCont);
        webCont.appendChild(document.createElement('hr'));
    });
}

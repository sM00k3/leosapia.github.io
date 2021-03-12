let img = document.querySelector('img');

img.onclick = function() {
    let meuSrc = img.getAttribute('src');

    if(meuSrc === 'images/mozilla-logo.jpg') {
        img.setAttribute('src', 'images/ls-logo.jpg');
    } else {
        img.setAttribute('src', 'images/mozilla-logo.jpg');
    }
}

let button = document.querySelector('button');
let titleH1 = document.querySelector('h1');

function usernameDefinition() {
    let username = prompt('Por favor, digite seu nome: ');

    if(!username || username === null) {
        usernameDefinition();
    } else {
        localStorage.setItem('username', username);
        titleH1.textContent = 'Mozilla é legal, ' + username + '.';
    }

    if(!localStorage.getItem('username')) {
        usernameDefinition();
    } else {
        let salvedName = localStorage.getItem('username');
        titleH1.textContent = 'Mozilla é legal, ' + salvedName + '.';
    }
}

button.onclick = function() {
    usernameDefinition();
}



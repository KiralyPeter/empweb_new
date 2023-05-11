const doc = {
    userInput: document.querySelector('#user'),
    passInput: document.querySelector('#pass'),
    loginButton: document.querySelector('#loginButton')
};

const state = {
    user: null,
    pass: null,
    host: 'http://localhost:8000/'
};

window.addEventListener('load', ()=> {
    init();
});

function init (){
    doc.loginButton.addEventListener('click', ()=> {
        startLogin();
    });
};

function startLogin(){
    state.user = doc.userInput.value;
    state.pass = doc.passInput.value;
    login();
};

function login(){
    let endpoint = 'login';
    let url = state.host+endpoint;
    fetch(url);
};
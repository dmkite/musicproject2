const model = require('./model')
const landingPage = require('../landing-page/controller')

function init() {
    if(window.location.pathname === '/index.html' || window.location.pathname === '/'){ 
        landingPage.init()
        document.querySelectorAll('.actions a')[1].addEventListener('click', function (e) { continueAsGuest(e) })
    }
    if(localStorage.getItem('newSignup')) welcome()
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') document.addEventListener('keyup', isFilled)
    else document.addEventListener('keyup', activateBtn)
}

function continueAsGuest(e){
    return login(e, {username: 'guest', password: 'Password1!'})
}

function welcome(){
    localStorage.removeItem('newSignup')
    let div = document.createElement('div')
    div.innerHTML = '<div class="alert">Thanks for making an account with The Music Project. Please log in.</div>'
    document.querySelector('body').appendChild(div)
}

function isFilled() {
    const inputs = document.querySelectorAll('form input')
    const button = document.querySelector('#submit')
    for (let input of inputs) {
        if (input.value === '') return button.setAttribute('disabled', 'disabled')
    }
    button.removeAttribute('disabled')
    document.querySelector('form').onsubmit = function (e) { login(e) }
}

function generateRandomString(length) {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
}

function login(e, body) {
    e.preventDefault()
    if(!body) body = getBody()
    return model.login(body)
        .then(token => {
            if(!token) throw new Error('Something went wrong')
            localStorage.setItem('token', token.data.token)
            return
        })
        .then(() => { 
            const client_id = 'f0c75fb80a7a43f2b207e62c4f609915'
            const redirect_uri = 'http://music-project.surge.sh/music-project.html'
            const state = generateRandomString(16);

            localStorage.setItem('spotify_auth_state', state);
            const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-private user-library-modify streaming user-read-recently-played user-top-read';

            let url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);

            window.location = url;
        
        })
        .catch(err => {
            if(err.response){
                if (err.response.data) surfaceError(err.response.data.message)
            }
            console.error(err)
        })
        
}

function getBody() {
    const inputs = document.querySelectorAll('form input')
    const body = {}
    for (let input of inputs) {
        body[input.id] = input.value
    }
    return body
}

function surfaceError(err) {
    const warning = document.querySelector('.warning')
    console.error(err)
    if (err.response) warning.innerHTML = `${err.response.data.message}`
    else warning.innerHTML = `${err}`

    warning.classList.remove('hidden')
}

function activateBtn() {
    const submitBtn = document.querySelector('#submit')
    checkPasswords()
    let result = checkInputs()
    if (!result) {
        submitBtn.setAttribute('disabled', 'disabled')
        return false
    }
    submitBtn.removeAttribute('disabled')
    document.querySelector('#signup').onsubmit = function (e) { signup(e) }
}


function checkInputs() {
    const inputs = document.querySelectorAll('#signup input')
    body = {}
    for (let input of inputs) {
        if (!input.value) return false
        body[input.id] = input.value
    }
    if (body.passwordMatch !== body.password) return false
    return body
}

function checkPasswords() {
    const passwordMatch = document.querySelector('#passwordMatch')
    passwordMatch.addEventListener('keyup', isEqual)
}

function isEqual() {
    const passwordMatch = document.querySelector('#passwordMatch').value
    const password = document.querySelector('#password').value
    if (passwordMatch !== password)
        document.querySelector('.passwordWarning').classList.remove('hidden')
    else document.querySelector('.passwordWarning').classList.add('hidden')
}

function signup(e) {
    e.preventDefault()
    const body = getBody()
    return model.signup(body)
        .then(() => {
            localStorage.setItem('newSignup', true)
            document.location.href = '/index.html'
        })
        .catch(err => {
            const warning = document.querySelector('.warning')
            console.error(err)
            if (err.response) warning.innerHTML = `${err.response.data.message}`
            else warning.innerHTML = `${err}`
            warning.classList.remove('hidden')
        })
}

function signout(){
    localStorage.removeItem('token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('spotify_playlist_id')
    localStorage.removeItem('spotify_auth_state')
    document.location.href = '/'
}

module.exports = { init, signout }
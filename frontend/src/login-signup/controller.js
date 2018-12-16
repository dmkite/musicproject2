const model = require('./model')

function init() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') document.addEventListener('keyup', isFilled)
    else document.addEventListener('keyup', activateBtn)
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

function login(e) {
    e.preventDefault()
    const body = getBody()
    return model.login(body)
        .then(token => {
            localStorage.setItem('token', token.data.token)
            return
        })
        .then(() => {
            document.location.href = 'http://localhost:8888'
        })
        .catch(err => {
            if (err.response.data) surfaceError(err.response.data.message)
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

///////////////////////////////////////////////////////////////////////////////
//  Signup
///////////////////////////////////////////////////////////////////////////////

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

module.exports = { init }
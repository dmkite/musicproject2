const axios = require('axios')
const login = require('./login')
const baseURL = 'http://localhost:3000'

function init() {
    document.addEventListener('keyup', activateBtn)
}

function activateBtn() {
    const submitBtn = document.querySelector('#submit')
    checkPasswords()
    let result = checkInputs()
    if (!result){
        submitBtn.setAttribute('disabled', 'disabled')
        return false
    } 
    submitBtn.removeAttribute('disabled')
    document.querySelector('#signup').onsubmit = function (e) { submit(e) }
}

function checkInputs() {
    const inputs = document.querySelectorAll('.modal input')
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

function submit(e){
    e.preventDefault()
    const body = login.getBody()
    axios.post(`${baseURL}/users/signup`, body)
    .then(result => {
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
const login = require('./login')
const baseURL = 'http://localhost:3000'

function init() {
    document.addEventListener('keyup', activateBtn)
}

function activateBtn() {
    checkPasswords()
    let result = checkInputs()
    if (!result) return false
    document.querySelector('#submit').classList.remove('disabled')
    document.querySelector('#submit').addEventListener('click', function (e) { submit(e) })
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
}


module.exports = { init }
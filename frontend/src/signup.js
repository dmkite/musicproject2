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
    result = {}
    for (let input of inputs) {
        if (!input.value) return false
        result[input.id] = input.value
    }
    if (result.passwordMatch !== result.password) return false
    delete result.passwordMatch
    return result
}

function checkPasswords() {
    const passwordMatch = document.querySelector('#passwordMatch')
    passwordMatch.addEventListener('keyup', isEqual)
}

function isEqual() {
    const passwordMatch = document.querySelector('#passwordMatch').value
    const password = document.querySelector('#password').value
    if (passwordMatch !== password && !document.querySelector('.passwordWarning')) document.querySelector('form').innerHTML += '<span class="passwordWarning">Passwords do not match</span>'
    else document.querySelector('.passwordWarning').classList.add('hidden')
}

function submit(e){
    e.preventDefault()
    const body = login.getBody()
    axios.post(`${baseURL}/users/signup`, body)

}


module.exports = { init }
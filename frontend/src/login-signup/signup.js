// const axios = require('axios')
// const login = require('./login')
// const baseURL = 'http://localhost:3000'

// function init() {
// }

// function activateBtn() {
//     const submitBtn = document.querySelector('#submit')
//     checkPasswords()
//     let result = checkInputs()
//     if (!result){
//         submitBtn.setAttribute('disabled', 'disabled')
//         return false
//     } 
//     submitBtn.removeAttribute('disabled')
//     document.querySelector('#signup').onsubmit = function (e) { submit(e) }
// }

// function checkInputs() {
//     const inputs = document.querySelectorAll('.modal input')
//     body = {}
//     for (let input of inputs) {
//         if (!input.value) return false
//         body[input.id] = input.value
//     }
//     if (body.passwordMatch !== body.password) return false
//     return body
// }

// function checkPasswords() {
//     const passwordMatch = document.querySelector('#passwordMatch')
//     passwordMatch.addEventListener('keyup', isEqual)
// }

// function isEqual() {
//     const passwordMatch = document.querySelector('#passwordMatch').value
//     const password = document.querySelector('#password').value
//     if (passwordMatch !== password) 
//         document.querySelector('.passwordWarning').classList.remove('hidden')
//     else document.querySelector('.passwordWarning').classList.add('hidden')
// }


// module.exports = { init }
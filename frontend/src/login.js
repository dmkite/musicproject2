const axios = require('axios')
const baseURL = 'http://localhost:3000'
function init(){
    document.addEventListener('keyup', isFilled)
}

function isFilled(){
    const inputs = document.querySelectorAll('form input')
    const button = document.querySelector('#submit')
    for (let input of inputs){
        if (input.value === '') return button.setAttribute('disabled', 'disabled')
    }
    button.removeAttribute('disabled')
    button.addEventListener('click', function(e){submit(e)})
}

function submit(e){
    e.preventDefault()
    const body = getBody()
    axios.post(`${baseURL}/auth/token`, body)
    .then(token => {
        localStorage.setItem('token', token)
        document.location.href = 'protected-page.html'
    })
    .catch(err => {
        if(err.response.data) surfaceError(err.response.data)
    })
}

function getBody(){
    const inputs = document.querySelectorAll('#login input')
    const body = {}
    for(let input of inputs){
        body[input.id] = input.value    
    }
    return body
}

function surfaceError(err){
    document.querySelector('body').innerHTML += `<div class="error">${err}</div>`
}
module.exports = {init, getBody, surfaceError}
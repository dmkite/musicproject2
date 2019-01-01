const {signout} = require('./login-signup/controller')

function prepHeader(){
    document.querySelector('.welcome').textContent += `, ${localStorage.getItem('f_name')}`
    const div = document.createElement('div')
    div.textContent = localStorage.getItem('f_name')[0]
    div.classList.add('userLetter')
    document.querySelector('.welcome').appendChild(div)
    document.querySelector('#signout').onclick = signout
}

module.exports = prepHeader
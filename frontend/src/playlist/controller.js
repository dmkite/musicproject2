const model = require('./model')

function init(){
    document.querySelector('#playlist').onkeyup = checkVals
    document.querySelector('#playlist').onsubmit = function (e) { makePlaylist(e) }
}

function checkVals(){
    const input = document.querySelector('#playlist input')
    const button = document.querySelector('#playlist button')
    if(input.value === '') button.setAttribute('disabled', 'disabled')
    else button.removeAttribute('disabled')
}

function makePlaylist(e){
    e.preventDefault()
    const body = generateBody()
    model.add(body)
}

function generateBody(){
    body = {
        name: document.querySelector('#playlist input').value,
        public: false,
        collaborative: false,
        description: document.querySelector('#playlist textarea').value,
        user_id: localStorage.getItem('spotifyId'),
        access_token: localStorage.getItem('access_token')
    }
    return body
}


module.exports = {init}

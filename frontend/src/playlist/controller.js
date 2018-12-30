const model = require('./model')
const {signout} = require('../login-signup/controller')

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
    .then(result =>{
        if (!result) throw Error
        localStorage.setItem('spotify_playlist_id', result.spotify_playlist_id)
        let playlistName = document.querySelector('#playlist input').value
        document.querySelector('#playlist').remove()
        document.querySelector('main').textContent = `Playlist ${playlistName} created`
        
    })
    .catch(err => {
        console.log(err)
        // return signout()
    })
    
}

function generateBody(){
    body = {
        name: document.querySelector('#playlist input').value,
        public: false,
        collaborative: false,
        description: document.querySelector('#playlist textarea').value,
        user_id: localStorage.getItem('spotifyId'),
        access_token: localStorage.getItem('access_token'),
        userId: localStorage.getItem('userId')
    }
    return body
}


module.exports = {init}

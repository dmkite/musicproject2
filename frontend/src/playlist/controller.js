const model = require('./model')
const {signout} = require('../login-signup/controller')
const songModel = require('../music-project/hits/model')
const {favSongTemplate} = require('../music-project/hits/view')

function init(){
    document.querySelector('#playlistForm').onkeyup = checkVals
    document.querySelector('#playlistForm').onsubmit = function (e) { makePlaylist(e) }
    addSongs()
}

function checkVals(){
    const input = document.querySelector('#playlistForm input')
    const button = document.querySelector('#playlistForm button')
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
        let playlistName = document.querySelector('#playlistForm input').value
        document.querySelector('#playlistForm ').remove()
        document.querySelector('main').textContent = `Playlist ${playlistName} created`
        
    })
    .catch(err => {
        console.log(err)
        // return signout()
    })
    
}

function generateBody(){
    body = {
        name: document.querySelector('#playlistForm input').value,
        public: false,
        collaborative: false,
        description: document.querySelector('#playlistForm textarea').value,
        user_id: localStorage.getItem('spotifyId'),
        access_token: localStorage.getItem('access_token'),
        userId: localStorage.getItem('userId')
    }
    return body
}

function addSongs(){
    return songModel.all()
    .then(result => {
        console.log(result)
        const songHTML = result.data.map(item => favSongTemplate(item))
        document.querySelector('.trackSelect').innerHTML = songHTML.join('')
        const hits = document.querySelectorAll('.hits')
        hits.forEach(item => item.innerHTML += '<input type="checkbox" checked>')
    })
    .catch(err => console.error(err))
}

module.exports = {init}

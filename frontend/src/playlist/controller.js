const model = require('./model')
const {signout} = require('../login-signup/controller')
const songModel = require('../music-project/hits/model')
const {favSongTemplate} = require('../music-project/hits/view')

function init(){
    if(!!localStorage.getItem('spotify_playlist_id')) editPlaylistInit()
    document.querySelector('#playlistForm').onkeyup = checkVals
    document.querySelector('#playlistForm').onsubmit = function (e) { playlistAction(e) }
    addSongsToSelect()
    document.onclick = gatherSongs
}

function editPlaylistInit(){
    document.querySelector('#playlistForm button').textContent = 'edit'
    const input = document.querySelector('#playlistForm input')
    const textarea = document.querySelector('#playlistForm textarea')
    const form = document.querySelector('#playlistForm')
    form.innerHTML = `<h3>${input.value}</h3><p>${textarea.value}</p>` + form.innerHTML
    input.remove()
    textarea.remove()
}

function checkVals(){
    const input = document.querySelector('#playlistForm input')
    const button = document.querySelector('#playlistForm button')
    if(input.value === '') button.setAttribute('disabled', 'disabled')
    else button.removeAttribute('disabled')
}

function playlistAction(e){
    e.preventDefault()
    let playlistExists = localStorage.getItem('spotify_playlist_id')
    if(!playlistExists) return makePlaylist()
    return updatePlaylist(playlistExists)
}

function makePlaylist(){
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
        userId: localStorage.getItem('userId'),
        uris: gatherSongs()
    }
    return body
}

function addSongsToSelect(){
    return songModel.all()
    .then(result => {
        const songHTML = result.data.map(item => favSongTemplate(item))
        document.querySelector('.trackSelect').innerHTML = songHTML.join('')
        const hits = document.querySelectorAll('.hits')
        hits.forEach(item => item.innerHTML += '<input type="checkbox" checked>')
    })
    .catch(err => console.error(err))
}

function gatherSongs(){
    const checkedBoxes = Array.from(document.querySelectorAll('input[checked]'))
    const spotifyURIs = checkedBoxes.map(box => `spotify:track:${box.parentElement.getAttribute('data-id')}`)
    console.log(spotifyURIs)
    return spotifyURIs
    
}

function updatePlaylist(playlist_id){
    let body = {uris: gatherSongs()}
    body = JSON.stringify(body)
    return model.replacePlaylist(body, playlist_id)
    .then(result => {
        if (result.response) {
            if (result.response.status === 401) console.log(result.response.status)
            const playlistName = document.querySelector('h3').textContent
            document.querySelector('main').textContent = `Playlist ${playlistName} created`
        }
    })
    .catch(err => {
        if(err.response){
            if(err.response.status === 401) return signout()
        }
    })
}

module.exports = {init}

const model = require('./model')
const searchModel = require('../search/model')
const queueView = require('../queue/view')
const queueModel = require('../queue/model')
const view = require('./view')
const {msToMins} = require('../search/controller')

function init(){
    return model.all()
    .then(result => {
        console.log(result, ' from init')
        if(!result.data) return
        document.querySelector('#current').innerHTML += queueView.albumTemplate(result.data)
        document.querySelector('#current').innerHTML += view.actionBlock(result.data)
        document.querySelector('#current .emptyState').remove()
        document.querySelector('.archive').onclick = function(e){openRatingForm(e, result.data.id)}
    })
}

function openRatingForm(e, albumId){
    const spotifyAlbumId = document.querySelector('.queuedAlbum').getAttribute('data-id')
    return searchModel.getAlbum(spotifyAlbumId)
    .then(result => {
        const trackForm = result.data.tracks.items.map(track => {
            track.duration_ms = msToMins(track.duration_ms)
            return view.trackFormField(track)
        })
        document.querySelector('#current').innerHTML += view.ratingForm(trackForm)
        document.querySelector('#ratingForm').onsubmit = function(e){archive(e, albumId)}
    })
}

function archive(e, albumId){
    e.preventDefault()
    const data = {
        body: {
            name: document.querySelector('#current h3').textContent,
            rating: document.querySelector('#rating').value,
            spotify_album_id: document.querySelector('#current .queuedAlbum').getAttribute('data-id'),
        },
        songs: gatherSongs()
    }
    return model.add(data)
    .then(result => {
        console.log(result, 'RIGHT BEFORE SHIFT QUEUE IS CALLED')
        shiftQueue(albumId)
    })
}

function gatherSongs(){
    result = []
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(input => {
        if(input.checked){ 
            let song = {}
            song.spotify_song_id = input.id 
            song.name = document.querySelectorAll(`label[for="${input.id}"]`)[1].textContent
            result.push(song)
        }
    })
//result works
    return result

}

function shiftQueue(albumId){
    return queueModel.delete(albumId)
    .then(result => {
        document.querySelector('#current').innerHTML = '<h2>Currently Listening To</h2>'
    })
    //shift queue needs to:
    //1. delete current album from queue
    //2. get latest album and change is_current to true
    //3. display current album
    //4. display next up

}
module.exports = {init}

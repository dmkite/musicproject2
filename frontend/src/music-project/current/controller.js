const model = require('./model')
const searchModel = require('../search/model')
const queueView = require('../queue/view')
const view = require('./view')
const {msToMins} = require('../search/controller')

function init(){
    return model.all()
    .then(result => {
        if(!result.data) return
        document.querySelector('#current').innerHTML += queueView.albumTemplate(result.data)
        document.querySelector('#current').innerHTML += view.actionBlock(result.data)
        document.querySelector('#current .emptyState').remove()
        document.querySelector('.archive').onclick = function(e){openRatingForm(e)}
    })
}

function openRatingForm(e){
    const albumId = document.querySelector('.queuedAlbum').getAttribute('data-id')
    return searchModel.getAlbum(albumId)
    .then(result => {
        const trackForm = result.data.tracks.items.map(track => {
            track.duration_ms = msToMins(track.duration_ms)
            return view.trackFormField(track)
        })
        document.querySelector('#current').innerHTML += view.ratingForm(trackForm)
        document.querySelector('#ratingForm').onsubmit = function(e){archive(e)}
    })
}

function archive(e){
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
    .then(result => console.log(result, '-----------------------------------------'))
}

function gatherSongs(){
    result = []
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(input => {
        if(input.checked){ 
            let song = {}
            song.id = input.id 
            song.name = document.querySelectorAll(`label[for="${input.id}"]`)[1].textContent
            result.push(song)
        }
    })
    return result

}

module.exports = {init}

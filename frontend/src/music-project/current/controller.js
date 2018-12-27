const model = require('./model')
const searchModel = require('../search/model')
const queueView = require('../queue/view')
const queueModel = require('../queue/model')
const view = require('./view')
// const {msToMins} = require('../search/controller')

function init(album){
    console.log('current init firing 88888888888888888888888888')
    if(!album) return
    const daysListenedTo = Math.ceil((new Date().getTime() - new Date(album.created_at).getTime() ) / 1000 / 60 / 60 / 24)
    document.querySelector('#current').innerHTML += queueView.albumTemplate(album, true)
    document.querySelector('#current').innerHTML += view.actionBlock(album, daysListenedTo)
    document.querySelector('#current .emptyState').remove()
    document.querySelector('.archive').onclick = function(e){openRatingForm(e, album.id)}
    document.querySelector('#current .delete').onclick = function(e){confirmDelete(e, album.id)}
    // const current = document.querySelector('#current')
    // if (current.children.length > 1) current.innerHTML += view.actionBlock()

    //issue: the above code relies on a model.all call to get the 'you have been listening to x album since y time'
}

function confirmDelete(e, albumId){
    let div = document.createElement('div')
    div.innerHTML = view.deleteTemplate()
    document.querySelector('#current').appendChild(div)
    addDeleteListeners(albumId)
}

function addDeleteListeners(albumId){
    const cancel = document.querySelector('#current .cancel')
    const confirm = document.querySelector('#current .confirm')
    cancel.addEventListener('click', function(){cancel.parentElement.remove()})
    confirm.addEventListener('click', function(){
        return queueModel.delete(albumId)
        .then( () => {
            confirm.parentElement.remove()
            location.reload()
        })
        .catch(err => console.error(err))
    })
}

function openRatingForm(e, albumId){
    e.target.textContent = 'cancel'
    const spotifyAlbumId = document.querySelector('.queuedAlbum').getAttribute('data-id')
    return searchModel.getAlbum(spotifyAlbumId)
    .then(result => {
        const trackForm = result.data.tracks.items.map(track => {
            track.duration_ms = msToMins(track.duration_ms)
            return view.trackFormField(track)
        })
        document.querySelector('#current').innerHTML += view.ratingForm(trackForm)
        document.querySelector('#ratingForm').onsubmit = function(e){archive(e, albumId)}
        document.querySelector('.archive').onclick = function (e) { removeRatingForm(e) }
    })
}

function removeRatingForm(e){
    console.log('HITTING')
    const albumId = document.querySelector('#current .queuedAlbum').getAttribute('data-id')
    e.target.textContent = 'Archive'
    document.querySelector('#ratingForm').remove()
    e.target.onclick = function(e){openRatingForm(e, albumId)}
}

function msToMins(num){
    let secs = Math.floor((num / 1000) % 60)
    if(secs < 10){
        secs = '0' + secs.toString()
    }
    if(secs > 10 && secs.toString().length === 1){
        secs = secs.toString() + '0'
    }
    const mins = Math.floor((num / 1000) / 60)
    return `${mins}:${secs}`
}

function archive(e, albumId){
    e.preventDefault()
    const data = {
        body: {
            name: document.querySelector('#current h3').textContent,
            rating: document.querySelector('#rating').value,
            spotify_album_id: document.querySelector('#current .queuedAlbum').getAttribute('data-id'),
            img: document.querySelector('#current img').getAttribute('src')
        },
        songs: gatherSongs()
    }
    return model.add(data)
    .then(result => {
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
            song.href = document.querySelectorAll(`label[for="${input.id}"]`)[1].children[0].getAttribute('href')
            result.push(song)
        }
    })
    return result

}

function shiftQueue(albumId){
    return queueModel.delete(albumId)
    .then(result => {
        document.querySelector('#current').innerHTML = '<h2>Currently Listening To</h2>'
        return queueModel.all()
    })
    .then(result => {
        // result.data[0].is_current = true
        window.location.reload()
    }
        )
}
module.exports = {init}

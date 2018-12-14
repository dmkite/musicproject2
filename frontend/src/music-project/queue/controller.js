const model = require('./model')
const view = require('./view')

function init() {
    const userId = localStorage.getItem('userId')
    return model.all(`/users/${userId}/queues`)
    .then(result => {
        console.log(result)
        document.querySelector('#upNext').innerHTML += view.albumTemplate(result.data[0])
    })
}

function addToDbQueue(albumId) {
    const album = document.querySelector(`div[data-id="${albumId}"]`)
    const userId = localStorage.getItem('userId')
    const body = {
        user_id: userId,
        album: album.children[1].textContent,
        artist: album.children[2].textContent,
        img: album.children[0].getAttribute('src'),
        album_id: albumId
    }
    document.querySelector('.autocomplete').innerHTML = ''
    return model.add(body)
    .then(([result]) => {
        console.log(result)
        document.querySelector('body').innerHTML += `<div class="alert">${result.data.album} added to queue</div>`
    })
    .catch(next)
}

module.exports = {init, addToDbQueue}
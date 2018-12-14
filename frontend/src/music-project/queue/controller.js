const model = require('./model')

function addToDbQueue(albumId) {
    const album = document.querySelector(`div[data-id="${albumId}"]`)
    const body = {
        user_id: '',
        album: album.children[1].textContent,
        artist: album.children[2].textContent,
        img: album.children[0].getAttribtute('src'),
        album_id: albumId
    }
    return model.addToDbQueue(body)
}

module.exports = {addToDbQueue}
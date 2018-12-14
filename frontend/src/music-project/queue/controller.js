const model = require('./model')

function addToDbQueue(albumId) {
    const album = document.querySelector(`div[data-id="${albumId}"]`)
    const userId = localStorage.getItem('userId')
    const body = {
        user_id: userId,
        album: album.children[1].textContent,
        artist: album.children[2].textContent,
        img: album.children[0].getAttribtute('src'),
        album_id: albumId
    }
    return model.add(body)
}

module.exports = {addToDbQueue}
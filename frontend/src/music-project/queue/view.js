function albumTemplate(album){
    return `
    <div class="queuedAlbum" data-id="${album.spotify_album_id}">
        <img src="${album.img}" alt="Image of ${album}">
        <h3>${album.album}</h3>
        <p>${album.artist}</p>
    </div>`
}

module.exports = {albumTemplate}
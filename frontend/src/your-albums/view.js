function albumTemplate(album){
    return `
    <div class="yourAlbum" data-id="${album.id}">
    <img src="${album.img}" alt="${album.name} album cover">
    <h3 class="title">${album.name}</h3>
    <p class="rating">${album.rating}</p>
    <ul class="songs">
        ${ album.songs ? (album.songs.map(song => {
            return `<li data-id="${song.spotify_song_id}"><a href="${song.href} target="_blank">${song.song}</a></li>`
        }).join('')) : ''}
    </ul>
    </div>`
}

function emptyState(){
    return `
    <div class="emptyState">
        <p>You haven't archived any albums as of yet. Check back after you do!</p>
        <img src="img/album.png" alt="icon of record player">
    </div>`
}
module.exports = {albumTemplate, emptyState}
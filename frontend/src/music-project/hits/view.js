function favSongTemplate(song){
    return  `
    <div class="hits" data-id="${song.spotify_song_id}">
        <img src="${song.img}" alt="${song.album} album cover">
        <p><a href="${song.href}">${song.song}</a> | ${song.album}</p>
    </div>`
}

function emptyTemplate(){
    return `
        <div class="emptyState">You haven't favorited any songs yet</div>`
}

module.exports = {favSongTemplate, emptyTemplate}
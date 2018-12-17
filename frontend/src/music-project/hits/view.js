function favSongTemplate(song){
    return  `
    <div data-id="${song.spotify_song_id}">
        <img src="${song.img}" alt="${song.album} album cover">
        <p>${song.song} | ${song.album}</p>
    </div>`
}
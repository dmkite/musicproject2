function queueTemplate(album){
    return `
    <div class="queueItem ${album.is_current ? 'currentQueue' : ''}">
        <img src="${album.img}" alt="${album.name} album cover">
        <div class="text">
            <h3>${album.album}</h3>
            <p>${album.artist}</p>
        </div>
        <div class="queueUp">
            <i class="fas fa-arrow-circle-up"></i>
        </div>
        <div class="queueDown">
            <i class="fas fa-arrow-circle-down"></i>
        </div>
    </div>
    `
}

module.exports = {queueTemplate}
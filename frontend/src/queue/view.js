function queueTemplate(album, isCurrent = false){
    return `
    <div class="queueItem ${isCurrent ? 'currentQueue' : ''}" data-id="${album.id}" data-place-in-queue="${album.place_in_queue}">
        <img src="${album.img}" alt="${album.album} album cover">
        <div class="text">
            <h3>${album.album}</h3>
            <p>${album.artist}</p>
            <button type="button">delete</button>
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
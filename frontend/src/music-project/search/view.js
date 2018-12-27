function autocompleteTemplate(item) {
    return `
    <div class="entry" data-id="${item.id}">
        <img src="${item.images[2].url}"></img>
        <div class="content">
            <h3>${item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</h3>
            <p>${item.artists[0].name.length > 20 ? item.artists[0].name.slice(0, 20) + '...' : item.artists[0].name}</p>
        </div>
    </div>`
}

function albumTemplate(album, tracks){
    return `
    <div class="albumSelect" data-id="${album.id}">
        <img class="albumCover" src="${album.images[1].url}" alt="image of ${album.name}">
        <div class="text">
            <h3>${album.name.length > 20 ? album.name.slice(0, 20) + '...' : album.name}</h3>
            <p>${album.artists[0].name.length > 20 ? album.artists[0].name.slice(0, 20) + '...' : album.artists[0].name}</p>
        </div>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Track</td>
                    <td>Duration</td>
                </tr>
            </thead>
            <tbody>
                ${tracks}
            </tbody>
        </table>
        <button class="addToQueue" type="button">Add</button>
        <button class="close" type="button">Close</button>
    </div>`
}

function tracksTable(track){
    return `
        <tr data-id="${track.id}">
            <td>${track.track_number}</td>
            <td>${track.name.length > 20 ? track.name.slice(0, 20) + '...' : track.name}</td>
            <td>${track.duration_ms}</td>
        </tr>`
} 

module.exports = {autocompleteTemplate, albumTemplate, tracksTable}
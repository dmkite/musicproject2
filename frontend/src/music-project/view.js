function autocompleteTemplate(item) {
    return `
    <div class="entry" data-id="${item.id}">
        <img src="${item.images[2].url}"></img>
        <div class="content">
            <h3>${item.name}</h3>
            <p>${item.artists[0].name}</p>
        </div>
    </div>`
}

module.exports = {autocompleteTemplate}
function actionBlock(album){
    return `
        <div class="actionBlock">
            <p>You started listening to <i>${album.album}</i> on ${new Date(album.created_at)}</p>
            <button class="archive" type="button">Archive</button>
        </div>
    `
}

function trackFormField(track){
    return `
    <tr>
        <td><input id="${track.id}" type="checkbox"></td>
        <td><label for=${track.id}>${track.track_number}</label></td>
        <td><label for=${track.id}><a href="${track.external_urls.spotify}" target="_blank">${track.name}</a></label></td>
        <td><label for=${track.id}>${track.duration_ms}</label></td>
        
    </tr>
    `
}

function ratingForm(trackForm){
    return `
    <form id="ratingForm">
        <label for="rating">Rating</label>
        <input id="rating" type="range" max="5" min="1" step="0.5" required list="tickmarks">
        <datalist id="tickmarks">
            <option value="1" label="1">
            <option value="1.5">
            <option value="2" label="2">
            <option value="2.5">
            <option value="3" label="3">
            <option value="3.5">
            <option value="4" label="4">
            <option value="4.5">
            <option value="5" label="5">
        </datalist>
        <label for="songs">Pick your top tracks</label>
        <table class="tracks">
            <thead>
                <tr>
                    <td></td>
                    <td>#</td>
                    <td>Track</td>
                    <td>Duration</td>
                </tr>
            </thead>
            <tbody>
                ${trackForm.join('')}
            </tbody>
        </table>
        <button class="archive" type="submit">Archive</button>
        
    </form>`
}

module.exports = {actionBlock, trackFormField, ratingForm}
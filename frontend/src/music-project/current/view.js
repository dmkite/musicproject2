function actionBlock(album, time){
    return `
        <div class="actionBlock">
            <p>You listened to <i>${album.album}</i> for ${time} ${ time === 1 ? 'day' : 'days'}</p>
            <button class="archive" type="button">${time >= 7 ? 'Archive' : 'Archive Early'}</button>
            <button class="delete" type="button">Delete from queue</button>
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
        <p class="ratingLabel"><span>1</span><span>5</span></p>
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

function deleteTemplate(){
    return `
    <p>Are you sure you want to delete this album?</p>
    <button class="cancel">cancel</button>
    <button class="confirm">delete</button>`

}
module.exports = {actionBlock, trackFormField, ratingForm, deleteTemplate}
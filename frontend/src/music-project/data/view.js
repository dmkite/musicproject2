
function emptyWeek(){
    return `<div class="dataWeek empty">
        <div class="details">You didn't listen to anything this week</div>
    </div>`
}

function activeWeek(album){
    `<div class="dataWeek rating${album.rating}">
        <div class="details">You listened to ${album.name}</div>
    </div>`
}

function addData(dataObj){
    return `
    <div class="total">Number of Albums listened to: <span>${dataObj.numberOfAlbums}</span></div>
    <div class="breakDown">
        <div class="oneStar" data-width="${dataObj.oneStar}">${dataObj.oneStar} One Star</div>
        <div class="twoStar" data-width="${dataObj.twoStar}">${dataObj.twoStar} Two Star</div>
        <div class="threeStar" data-width="${dataObj.threeStar}">${dataObj.threeStar} Three Star</div>
        <div class="fourStar" data-width="${dataObj.fourStar}">${dataObj.fourStar} Four Star</div>
        <div class="fiveStar" data-width="${dataObj.fiveStar}">${dataObj.fiveStar} Five Star</div>
    </div>`
}

module.exports = {emptyWeek, addData}
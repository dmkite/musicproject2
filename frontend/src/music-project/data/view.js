function yearSelect(arr){
    return `
        <div id="selectYear">
            ${arr.join('')}
        </div>`
}

function emptyWeek(){
    return `
    <div class="dataWeek empty">
        <div class="details noDisplay">
            No data
            <div class="triangleLeft"></div>
        </div>
    </div>`
}

function activeWeek(album){
    album.rating = album.rating.toString()
    return `
    <div class="dataWeek rating${album.rating.split('.').join('_')}">
        <div class="details noDisplay">
            ${album.name} (${album.rating})
            <div class="triangleLeft"></div>
        </div>
        
    </div>`
}

function addData(dataObj){
    return `
    <div class="total">Number of Albums listened to: <span>${dataObj.numberOfAlbums}</span></div>
    <div class="breakDown">
        <div class="oneStar" data-width="${dataObj.oneStar}"></div>
        <div class="twoStar" data-width="${dataObj.twoStar}"></div>
        <div class="threeStar" data-width="${dataObj.threeStar}"></div>
        <div class="fourStar" data-width="${dataObj.fourStar}"></div>
        <div class="fiveStar" data-width="${dataObj.fiveStar}"></div>
    </div>
    
    <div class="key">
        <span class="oneStar">${dataObj.oneStar} One Star</span>
        <span class="twoStar">${dataObj.twoStar} Two Star</span>
        <span class="threeStar">${dataObj.threeStar} Three Star</span>
        <span class="fourStar"> ${dataObj.fourStar} Four Star</span>
        <span class="fiveStar">${dataObj.fiveStar} Five Star</span>
    </div>`

}

module.exports = {yearSelect, emptyWeek, activeWeek, addData}
const model = require('./model')
const view = require('./view')

function init(){
    calendar()
}

function calendar(){
    return model.all()
    .then(result => {
        addDates(result.data)
        let data = makeData(result.data)
        document.querySelector('.glance').innerHTML = view.addData(data)
        
        return data.numberOfAlbums
    })
    .then(total => {
        editData(total)
    })
    .catch(err => {
        console.error(err)
    })
    // const date = new Date()
    // let weeks = date.getMonth() * 4
    // weeks += Math.floor(date.getDate() / 7)
    // addDates(weeks)
}

function addDates(albums){
    const dateHolder = document.querySelector('.dates')

    const indexedAlbumsByWeek = albums.reduce((acc, album) => {
        album.week = timestampToWeek(album.created_at)
        album.rating = album.rating.toString().split('.').join('_')
        acc[album.week] = {name: album.name, rating:album.rating}
        return acc
    }, {})
    for(let i = 1; i <= 52; i++){
        if (indexedAlbumsByWeek[i]) dateHolder.innerHTML += view.activeWeek(indexedAlbumsByWeek[i])
        else dateHolder.innerHTML += view.emptyWeek()
    }
    const dataWeeks = document.querySelectorAll('.dataWeek')
    for(let week of dataWeeks){
        week.addEventListener('mouseover', function (e) { display(e) })
        week.addEventListener('mouseout', function (e) { display(e) })
    }
    
}

function display(e){
    e.currentTarget.children[0].classList.toggle('noDisplay')
}

function timestampToWeek(str) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const date = str.split('T0')[0]
    const units = date.split('-')
    const month = Number(units[1]) - 2
    if (month < 0) return Math.ceil(Number(units[2]) / 7)
    else {
        result = Number(units[2])
        for (let i = 0; i < month; i++) {
            result += daysInMonth[i]
        }
        return Math.floor(result / 7)
    }
}

function makeData(arr){
    const result = {
        numberOfAlbums: arr.length,
        oneStar: 0,
        twoStar: 0,
        threeStar: 0,
        fourStar: 0,
        fiveStar: 0,
    }
    arr.map(album => {
        switch (Math.floor(album.rating)){
            case 1: 
                result.oneStar++
                break
            case 2:
                result.twoStar++
                break
            case 3:
                result.threeStar++
                break
            case 4: 
                result.fourStar++
                break
            default:
                result.fiveStar++
        }
    })
    return result
}

function editData(total){
    let bars = document.querySelectorAll('.breakDown div')
    for(let bar of bars){
        let num = Number(bar.getAttribute('data-width'))
        let width
        let color

        if(num === 0) width = '5%'
        else width = (num/total * 100).toString() + '%'
        
        if(num === 0){
            color = '#333'
        }
        else if (num < 50){
            color = '#d09034'
        }
        else color = '#30d040'

        bar.setAttribute('style', `width:${width}; background-color:${color}; white-space:nowrap;`)

    }
}

module.exports = {init}
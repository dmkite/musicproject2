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
}

function addDates(albums){
    const indexedAlbumsByWeek = albums.reduce((acc, album) => {
        const {week, year} = timestampToWeek(album.created_at)
        album.week = week
        album.year = year
        if (!acc[album.year]) acc[album.year] = {}
        acc[album.year][album.week] = { name: album.name, rating: album.rating }
        return acc
    }, {})
    let year = addRadioReturnYear(Object.keys(indexedAlbumsByWeek))

    let dataWeeksHTML = []
    for(let i = 1; i <= 52; i++){
        if (indexedAlbumsByWeek[year][i]) dataWeeksHTML.push(view.activeWeek(indexedAlbumsByWeek[year][i]))
        else dataWeeksHTML.push(view.emptyWeek())
    }
    const dateHolder = document.querySelector('.dates')
    dateHolder.innerHTML = dataWeeksHTML.join('')

    const dataWeeks = document.querySelectorAll('.dataWeek')
    for(let week of dataWeeks){
        week.addEventListener('mouseover', function (e) { display(e) })
        week.addEventListener('mouseout', function (e) { display(e) })
    }
}

function addRadioReturnYear(arr){
    const options = arr.map(year => `<label for="year"> <input type="radio" name="year" value="${year}">${year}</label>`)
    document.querySelector('#dataVis').innerHTML += view.yearSelect(options)
    const radios = document.querySelectorAll('#dataVis input[type="radio"]')
    document.querySelector('#dataVis input[type="radio"]').checked = true
    let year
    for (let radio of radios) {
        if (radio.checked) {
            year = radio.value
        }
    }
    return year
}

function display(e){
    e.currentTarget.children[0].classList.toggle('noDisplay')
}

function timestampToWeek(str) {
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    //Issue encountered with splitting condition. Originally split on T0, but in recent tests T1 was in timestamp
    const date = str.split('T')[0]
    const units = date.split('-')
    const year = units[0]
    const month = Number(units[1])
    result = Number(units[2])
    for (let i = 0; i < month; i++) {
        result += daysInMonth[i]
    }
    return {
        week: Math.floor(result / 7) + 1,
        year
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
        album.rating = album.rating.toString()
        album.rating = Number(album.rating.split('_').join('.'))
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
            case 5:
                result.fiveStar++
                break
            default:
                return null
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
        else width = (num/total * 80 + 5).toString() + '%'

        bar.setAttribute('style', `width:${width}; background-color:${color}; white-space:nowrap;`)

    }
}

module.exports = {init}
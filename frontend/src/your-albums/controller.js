const model = require('./model')
const view = require('./view')
const songModel = require('../music-project/hits/model')
let yourAlbums

function init(){
    let albums
    return model.all()
    .then(result => {
        albums = result.data
        return songModel.all()
    })
    .then(result => {
        const albumSongMerge = result.data.reduce((acc, song) => {
            for(album of acc){
                if(album.album_id === song.album_id){
                    if(!album.songs) album.songs = [song]
                    else album.songs.push(song)
                }
            }
            return acc
        }, albums)
        yourAlbums = albumSongMerge
        let albumHTML = albumSongMerge.map(album => view.albumTemplate(album))
        document.querySelector('main').innerHTML += albumHTML.join('')
        prepSorter(albumSongMerge)
    })
}

function prepSorter(albumSongMerge){
    document.querySelector('#sort').addEventListener('change', function(e){sort(e, albumSongMerge)})
    const radios = document.querySelectorAll('input[type="radio"]')
    radios.forEach(radio => radio.addEventListener('change', function (e) { filter(e) }) )
}

function sort(e, albums){
    const options = document.querySelectorAll('option')
    const idx = e.target.selectedIndex
    const selection = options[idx].value
    let newOrder 
    switch(selection){
        case 'lowToHigh':
            newOrder = albums.sort((a, b) => a.rating - b.rating)
            break
        case 'highToLow':
            newOrder = albums.sort((a, b) => b.rating - a.rating)
            break
    }
    if(newOrder) return render(newOrder)
    else return false
}

function render(albums){
    let albumHTML = albums.map(album => view.albumTemplate(album))
    document.querySelector('main').innerHTML = albumHTML.join('')
    prepSorter(yourAlbums)
}

function filter(e){
    let val = e.target.value
    let result = yourAlbums.filter(item => Number(item.rating) >= Number(val))
    render(result)
}

module.exports = {init}
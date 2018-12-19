const model = require('./model')
const view = require('./view')
const songModel = require('../music-project/hits/model')

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
        console.log(albumSongMerge)
        let albumHTML = albumSongMerge.map(album => view.albumTemplate(album))
        document.querySelector('main').innerHTML += albumHTML.join('')
    })

}


module.exports = {init}
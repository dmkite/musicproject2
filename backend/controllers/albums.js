const model = require('../models/albums')
const songModel = require('../models/songs')

function add(req, res, next){
    const userId = req.params.userId
    const rating = req.body.rating
    delete req.body.rating
    return model.add(req.body)
    .then(result => {
        console.log('this is the result from AlbumModel.add', result)
        const albumId = result[0].id
        console.log('this is albumId stored in variable', albumId)
        return model.connectUserToAlbum(req.params.userId, albumId, rating)
    })
    .then(([result]) =>{
        res.status(201).send(result)
    })
}

function addSong(req, res, next){
    const song = req.body
    return songModel.add(song)
    .then(result =>{
        res.status(201).send(result)
    })
}

function all(req, res, next){
    const userId = req.params.userId
    return model.all(userId)
    .then(result => {
        res.status(200).send(result)
    })
}

module.exports = {add, addSong, all}
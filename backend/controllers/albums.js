const model = require('../models/albums')
const songModel = require('../models/songs')

function add(req, res, next){
    const rating = req.body.rating
    delete req.body.rating
    return model.add(req.body)
    .then(result => {
        const albumId = result[0].id
        return model.connectUserToAlbum(req.params.userId, albumId, rating)
    })
    .then(([result]) =>{
        res.status(201).send(result)
    })
    .catch(next)
}

function addSong(req, res, next){
    const song = req.body
    return songModel.add(song)
    .then(result =>{
        res.status(201).send(result)
    })
    .catch(next)
}

function all(req, res, next){
    const userId = req.params.userId
    return model.all(userId)
    .then(result => {
        res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {add, addSong, all}
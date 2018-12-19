const model = require('../models/albums')
const songModel = require('../models/songs')

function add(req, res, next){
    const userId = req.params.userId
    const rating = req.body.rating
    delete req.body.rating
    return model.add(req.body)
    .then(result => {
        return model.connectUserToAlbum(req.params.userId, result.id, rating)
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
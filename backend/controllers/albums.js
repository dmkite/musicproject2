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
    console.log('hitting add song with ', req.body)
    const song = req.body
    return songModel.add(song)
    .then(result =>{
        console.log('result after songModel', result)
        res.status(201).send(result)
    })
}

module.exports = {add, addSong}
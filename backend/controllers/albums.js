const model = require('../models/albums')

function add(req, res, next){
    const userId = req.params.userId
    console.log('hitting controller for albums', req.body)
    const rating = req.body.rating
    delete req.body.rating
    return model.add(req.body)
    .then(result => {
        console.log(result, '~~~~~~~~~~~~~~~~~~``')
        return model.connectUserToAlbum(req.params.userId, result.id, rating)
    })
    .then(([result]) =>{
        console.log(result)
        res.status(201).send(result)
    })
}

function addSongs(req, res, next){

}

module.exports = {add, addSongs}
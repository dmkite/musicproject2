const model = require('../models/queue')

function add(req, res, next){
    return model.add(req.body)
    .then(result => {
        if (!result) return next({ status: 400, message: `${req.body.album} is either in your queue or has already been listened to` })
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

function current(req, res, next){
    const userId = req.params.userId
    return model.current(userId)
    .then(result => {
        res.status(200).send(result)
    })
    .catch(next)
}

function del(req, res, next){
    const albumId = req.params.albumId
    return model.del(albumId)
    .then(result =>{
        res.status(200).send(result)
    })
    .catch(next)
}

function update(req, res, next){
    const userId = req.params.userId
    console.log(req.body)
    // return model.update(req.body)
    // .then(result => console.log(result))
    // .catch(next)
}

module.exports ={add, all, current, del, update}
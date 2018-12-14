const model = require('../models/queue')

function add(req, res, next){
    return model.add(req.body)
    .then(result => {
        res.status(201).send(result)
    })
    .catch(err =>{
        console.log(err)
        res.status(400).send(err)
    })
}

function all(req, res, next){
    const userId = req.params.userId
    return model.all(userId)
    .then(result => {
        console.log(result, '++++++++++++++++++++++++++++++++++++++++++++++++++++')
        res.status(200).send(result)
    })
}

module.exports ={add, all}
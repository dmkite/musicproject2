const model = require('../models/queue')

function add(req, res, next){
    return model.add(req.body)
    .then(result => {
        res.status(201).send(result)
    })
    .catch(err =>{
        res.status(401).send(err)
    })
}

module.exports ={add}
const model = require('../models/albums')

function add(req, res, next){
    const userId = req.params.userId
    console.log('hitting controller for albums', req.body)
    // req.body.user_id = userId
    return model.add(req.body)
}

module.exports = {add}
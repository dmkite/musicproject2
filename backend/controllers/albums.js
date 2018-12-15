const model = require('../models/albums')

function add(req, res, next){
    console.log('hitting controller for albums', req.body)
}

module.exports = {add}
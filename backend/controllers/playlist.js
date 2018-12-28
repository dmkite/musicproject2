const model = require('../models/playlist')

function playlist(req, res, next){
    const user_id = req.body.user_id
    const access_token = req.body.access_token
    delete req.body.user_id
    delete req.body.access_token
    const body = JSON.stringify(req.body)
    return model.playlist(body, user_id, access_token)
    .then(result => {
        res.status(201).send(result)
    })
    .catch(next)
}

module.exports = {playlist}
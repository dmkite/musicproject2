const model = require('../models/playlist')

function playlist(req, res, next){
    //music project id
    const userId = req.body.userId
    //spotify id
    const user_id = req.body.user_id
    const access_token = req.body.access_token
    delete req.body.user_id
    delete req.body.access_token
    delete req.body.userId
    const body = JSON.stringify(req.body)
    return model.playlist(body, user_id, access_token, userId)
    .then(result => {
        console.log(result)
        // const playlistId = result.data.id
        res.status(201).send(result)
    })
    .catch(next)
}

module.exports = {playlist}
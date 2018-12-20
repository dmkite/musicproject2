const model = require('../models/playlist')

function playlist(req, res, next){
    const user_id = req.body.user_id
    delete req.body.user_id
    return model.playlist(req.body, user_id)
    .then(result => {
        
    })
    .catch(next)
}

module.exports = {playlist}
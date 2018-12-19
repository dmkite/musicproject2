const model = require('../models/songs')

function getSongs(req, res, next){
    return model.getUserSongs()
    .then(result => {
        res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {getSongs}
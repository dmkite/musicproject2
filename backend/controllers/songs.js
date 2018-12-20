const model = require('../models/songs')

function getSongs(req, res, next){
    const userId = req.params.userId
    return model.getUserSongs(userId)
    .then(result => {
        res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {getSongs}
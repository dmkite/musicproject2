const model = require('../models/songs')

function getSongs(req, res, next){
    return model.getUserSongs()
    .then(result => {
        console.log(result)
        res.status(200).send(result)
    })
    .catch(next)
}

module.exports = {getSongs}
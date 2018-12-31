const model = require('../models/playlist')

function playlist(req, res, next){
    //music project id
    const userId = req.body.userId
    //spotify id
    const user_id = req.body.user_id
    const access_token = req.body.access_token
    let uris = { uris: req.body.uris}
    let playlist_id
    delete req.body.user_id
    delete req.body.access_token
    delete req.body.userId
    delete req.body.uris
    const body = JSON.stringify(req.body)
    return model.playlist(body, user_id, access_token, userId)
    .then(result => {
        playlist_id = result.spotify_playlist_id
        // const playlistId = result.data.id
        // res.status(201).send(result)
        const body = JSON.stringify(uris)
        
        return model.populatePlaylist(body, access_token, playlist_id)
    })
    .then(result => {
        console.log(result, 'this is the result from the model')
        res.status(201).send({spotify_playlist_id: playlist_id})
    })
    .catch(next)
}

module.exports = {playlist}
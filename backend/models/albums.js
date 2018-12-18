const Model = require('./_Model')
const knex = require('../db/knex')



class AlbumsModel extends Model{
    constructor(table){
        super(table)
    }
    add(body){
        return knex('albums')
        .where('spotify_album_id', body.spotify_album_id)
        .first()
        .then(result => {
            if(!result) return super.add(body)
            else return result
        })
    }

    connectUserToAlbum(userId, albumId, rating){
        return knex('users_albums')
        .insert({
            user_id: userId,
            album_id: albumId,
            rating
        })
        .returning('*')
    }

    all(userId){
        return knex('users_albums')
        .innerJoin('albums', 'albums.id', 'users_albums.album_id')
        .where('user_id', userId)
    }
}

const model = new AlbumsModel('albums')

module.exports = model
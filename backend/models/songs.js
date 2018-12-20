const Model = require('./_Model')
const knex = require('../db/knex')

class SongModel extends Model{
    constructor(table){
        super(table)
    }

    getUserSongs(userId){
        return knex('songs') 
        .innerJoin('users_albums', 'users_albums.id', 'songs.users_albums_id')
        .innerJoin('albums', 'users_albums.album_id', 'albums.id')
        // .innerJoin('queue')
        .select('user_id', 'songs.name as song', 'albums.name as album', 'spotify_song_id', 'img', 'href', 'album_id')
        .where('user_id', userId)
        .then(result => result)
    }
}
const model = new SongModel('songs')

module.exports = model
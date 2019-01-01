const Model = require('./_Model')
const knex = require('../db/knex')

class QueueModel extends Model{
    constructor(table){
        super(table)
    }

    all(userId){
        return knex(this.table)
        .where({
            user_id: userId,
        })
        .orderBy('place_in_queue', 'asc')
    }

    add(body){
        return knex(this.table)
        .where({
            spotify_album_id: body.spotify_album_id
        })
        .then(result => {
            if(result) return false
            return knex('albums')
            .where({
                spotify_album_id: body.spotify_album_id
            })
        })
        .then(result =>{
            if(result) return false
            return knex(this.table)
            .orderBy('place_in_queue', 'asc')
            .first()
        })
        .then(result => {
            return this.getLastPlaceInQueue(body.user_id)
            .then(placeInQueue =>{
                body.place_in_queue = Number(placeInQueue.max) + 1
                return knex(this.table)
                    .insert(body)
                    .returning('*')
            })
            
        })

    }

    getLastPlaceInQueue(userId){
        return knex(this.table).max('place_in_queue')
        .where('user_id', userId)
        .first()
    }

    current(userId){
        return knex(this.table)
        .where({
            user_id: userId,
        })
        .orderBy('place_in_queue', 'asc')
        .first()
    }

    update(body){
        return knex(this.table)
        .where('id', body.id)
        .update('place_in_queue', body.place_in_queue)
        .returning('*')
    }
}

const model = new QueueModel('queues')

module.exports = model
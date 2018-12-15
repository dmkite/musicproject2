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
            is_current: false
        })
        .orderBy('created_at', 'asc')
    }

    add(body){
        return knex(this.table)
        .where({
            album_id: body.album_id
        })
        .then(result => {
            if(result) return false
            return knex('albums')
            .where({
                album_id: body.album_id
            })
        })
        .then(result =>{
            if(result) return false
            return knex(this.table)
            .where({
                is_current: true
            })
            .first()
        })
        .then(result => {
            if(!result) body.is_current = true
            else body.is_current = false
            return knex(this.table)
            .insert(body)
            .returning('*')
        })

    }

    current(userId){
        return knex(this.table)
        .where({
            user_id: userId,
            is_current: true
        })
        .first()
    }
}

const model = new QueueModel('queues')

module.exports = model
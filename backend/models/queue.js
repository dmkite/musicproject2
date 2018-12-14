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
        .orderBy('created_at', 'desc')
    }
}

const model = new QueueModel('queues')

module.exports = model
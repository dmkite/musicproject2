const knex = require('../db/knex')

class Model{
    constructor(table){
        this.table = table
    }

    all(userId){
        return knex(this.table)
        .where('id', userId)
        .orderBy('created_at', 'desc')
    }

    one(id){
        return knex(this.table)
        .where({id})
    }

    delete(id){
        return knex(this.table)
        .where({id})
        .del()
        .returning('*')
    }

    add(body){
        console.log(body)
        return knex(this.table)
        .insert(body)
        .returning('*')
    }

}

module.exports = Model
const knex = require('../db/knex')

class Model{
    constructor(table){
        this.table = table
    }

    static all(){
        return knex(this.table)
    }

    static one(id){
        return knex(this.table)
        .where({id})
    }

    static delete(id){
        return knex(this.table)
        .where({id})
        .del()
        .returning('*')
    }

    static add(body){
        return knex(this.table)
        .insert(body)
        .returning('*')
    }

}

module.exports = Model
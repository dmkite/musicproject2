const knex = require('../db/knex')

class Model{
    constructor(table){
        this.table = table
    }

    all(){
        return knex(this.table)
    }

    one(id){
        return knex(this.table)
        .where({id})
    }

    del(id){
        return knex(this.table)
        .where({id})
        .del()
        .returning('*')
    }

    add(body){
        return knex(this.table)
        .insert(body)
        .returning('*')
    }

}

module.exports = Model
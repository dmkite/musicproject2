
exports.up = function(knex, Promise) {
    return knex.schema.createTable('queues', table => {
        table.increments()
        table.integer('user_id').notNullable().defaultsTo(0)
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.string('album').notNullable().defaultsTo('')
        table.string('artist').notNullable().defaultsTo('')
        table.text('img').notNullable().defaultsTo('')
        table.text('spotify_album_id').notNullable().defaultsTo('').unique()
        table.integer('place_in_queue').notNullable().defaultsTo(0)
        table.timestamps(true, true)
  })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('queues')
};

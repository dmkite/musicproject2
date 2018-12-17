
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', table => {
      table.increments()
      table.string('name').notNullable().defaultsTo('')
      table.string('spotify_album_id').notNullable().defaultsTo('').unique()
      table.text('img').notNullable().defaultsTo('')
      // table.integer('user_id').notNullable().defaultsTo(0)
      // table.foreign('user_id').references('users.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
};

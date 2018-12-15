
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', table => {
      table.increments()
      table.string('name').notNullable().defaultsTo('')
      table.string('spotify_id').notNullable().defaultsTo('')
      table.integer('user_id').notNullable().defaultsTo(0)
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.integer('album_id').notNullable().defaultsTo(0)
      table.foreign('album_id').references('albums.id').onDelete('CASCADE')
      // table.boolean('favorited').notNullable().defaultsTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs')
};

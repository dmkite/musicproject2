exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_albums', table => {
    table.increments()
    table.integer('user_id').notNullable().defaultsTo(0)
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('album_id').notNullable().defaultsTo(0)
    table.foreign('album_id').references('albums.id').onDelete('CASCADE')
    table.float('rating', 1, 1).notNullable().defaultsTo(0)
    table.unique(['user_id', 'album_id'])
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_albums')
};

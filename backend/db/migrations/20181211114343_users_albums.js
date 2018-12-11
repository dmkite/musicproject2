
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_albums', table => {
    table.increments()
    table.integer('user_id').notNullable().defaultsTo(0)
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('album_id').notNullable().defaultsTo(0)
    table.foreign('album_id').references('albums.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_albums')
};

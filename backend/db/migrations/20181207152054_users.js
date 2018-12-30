
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.string('f_name').notNullable().defaultsTo('')
      table.string('l_name').notNullable().defaultsTo('')
      table.string('username').unique().notNullable().defaultsTo('')
      table.text('password').notNullable().defaultsTo('')
      table.text('spotify_playlist_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};

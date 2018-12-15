
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', table => {
      table.increments()
      table.string('name').notNullable().defaultsTo('')
      table.float('rating', 1, 1).notNullable().defaultsTo(0)
      table.string('album_id').notNullable().defaultsTo('')
      table.integer('user_id').notNullable().defaultsTo(0)
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
};

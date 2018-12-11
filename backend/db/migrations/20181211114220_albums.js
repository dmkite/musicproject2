
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', table => {
      table.increments()
      table.string('name').notNullable().defaultsTo('')
      table.float('rating', 1, 1).notNullable().defaultsTo(0)
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
};

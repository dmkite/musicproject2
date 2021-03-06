
exports.up = function (knex, Promise) {
    return knex.schema.createTable('songs', table => {
        table.increments()
        table.string('name').notNullable().defaultsTo('')
        table.string('spotify_song_id').notNullable().defaultsTo('')
        table.text('href').notNullable().defaultsTo('http://spotify.com')
        table.integer('users_albums_id').notNullable().defaultsTo(0)
        table.foreign('users_albums_id').references('users_albums.id').onDelete('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('songs')
};
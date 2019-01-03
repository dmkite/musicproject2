
exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {
          id: 2, f_name: 'Guest', l_name: 'Guest', username: 'guest', password: '$2b$10$WV/ewje4S7rB2x6ioAeSgOdHpmK.tqZfbWvOLiWBBI.rRbjGtVlEe', spotify_playlist_id: null}

      ])
        .then(() => {
          return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
        })
    }

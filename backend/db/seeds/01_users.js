
exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {
          id: 1, f_name: 'Dylan', l_name: 'Kite', username: 'kite.d92', password: '$2b$10$DGi0KOLFr0ftIf/3Zzocle4ehmdZTjoaxtbKHu7tnCA.zJt56PHSK'}

      ])
        .then(() => {
          return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
        })
    }

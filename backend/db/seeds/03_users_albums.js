
exports.seed = function(knex, Promise) {
      return knex('users_albums').insert([
        {
          id: 1,
          user_id: 1,
          album_id: 1,
          rating: 3,
          created_at: '2015-01-01 17:59:45.417387-08',
          updated_at: '2015-01-01 17:59:45.417387-08'
        },
        {
          id: 2,
          user_id: 1,
          album_id: 2,
          rating: 3,
          created_at: '2015-01-08 17:59:45.417387-08',
          updated_at: '2015-01-08 17:59:45.417387-08'
        },
        {
          id: 3,
          user_id: 1,
          album_id: 3,
          rating: 3,
          created_at: '2015-01-15 17:59:45.417387-08',
          updated_at: '2015-01-15 17:59:45.417387-08'
        },
        {
          id: 4,
          user_id: 1,
          album_id: 4,
          rating: 3.5,
          created_at: '2015-01-22 17:59:45.417387-08',
          updated_at: '2015-01-22 17:59:45.417387-08'
        },
        {
          id: 5,
          user_id: 1,
          album_id: 5,
          rating: 4.5,
          created_at: '2015-01-29 17:59:45.417387-08',
          updated_at: '2015-01-29 17:59:45.417387-08'
        },


        {
          id: 6,
          user_id: 1,
          album_id: 6,
          rating: 3,
          created_at: '2015-02-08 17:59:45.417387-08',
          updated_at: '2015-02-08 17:59:45.417387-08'
        },
        {
          id: 7,
          user_id: 1,
          album_id: 7,
          rating: 3,
          created_at: '2015-02-15 17:59:45.417387-08',
          updated_at: '2015-02-15 17:59:45.417387-08'
        },
        {
          id: 8,
          user_id: 1,
          album_id: 8,
          rating: 3,
          created_at: '2015-02-21 17:59:45.417387-08',
          updated_at: '2015-02-21 17:59:45.417387-08'
        },
        {
          id: 9,
          user_id: 1,
          album_id: 9,
          rating: 3,
          created_at: '2015-03-01 17:59:45.417387-08',
          updated_at: '2015-03-01 17:59:45.417387-08'
        },
        {
          id: 10,
          user_id: 1,
          album_id: 10,
          rating: 4.5,
          created_at: '2015-03-08 17:59:45.417387-08',
          updated_at: '2015-03-08 17:59:45.417387-08'
        },
        {
          id: 11,
          user_id: 1,
          album_id: 11,
          rating: 3,
          created_at: '2015-03-15 17:59:45.417387-08',
          updated_at: '2015-03-15 17:59:45.417387-08'
        },
        {
          id: 12,
          user_id: 1,
          album_id: 12,
          rating: 4,
          created_at: '2015-03-21 17:59:45.417387-08',
          updated_at: '2015-03-21 17:59:45.417387-08'
        },
        {
          id: 13,
          user_id: 1,
          album_id: 13,
          rating: 2.5,
          created_at: '2015-03-28 17:59:45.417387-08',
          updated_at: '2015-03-28 17:59:45.417387-08'
        },
        {
          id: 14,
          user_id: 1,
          album_id: 14,
          rating: 4,
          created_at: '2015-04-05 17:59:45.417387-08',
          updated_at: '2015-04-05 17:59:45.417387-08'
        },
        {
          id: 15,
          user_id: 1,
          album_id: 15,
          rating: 4,
          created_at: '2015-04-13 17:59:45.417387-08',
          updated_at: '2015-04-13 17:59:45.417387-08'
        },
        {
          id: 16,
          user_id: 1,
          album_id: 16,
          rating: 4.5,
          created_at: '2015-04-20 17:59:45.417387-08',
          updated_at: '2015-04-20 17:59:45.417387-08'
        },
        {
          id: 17,
          user_id: 1,
          album_id: 17,
          rating: 4,
          created_at: '2015-04-27 17:59:45.417387-08',
          updated_at: '2015-04-27 17:59:45.417387-08'
        },
        {
          id: 18,
          user_id: 1,
          album_id: 18,
          rating: 2.5,
          created_at: '2015-05-14 17:59:45.417387-08',
          updated_at: '2015-05-14 17:59:45.417387-08'
        },
        {
          id: 19,
          user_id: 1,
          album_id: 19,
          rating: 4,
          created_at: '2015-05-21 17:59:45.417387-08',
          updated_at: '2015-05-21 17:59:45.417387-08'
        },
        {
          id: 20,
          user_id: 1,
          album_id: 20,
          rating: 4,
          created_at: '2015-05-28 17:59:45.417387-08',
          updated_at: '2015-05-28 17:59:45.417387-08'
        },
        {
          id: 21,
          user_id: 1,
          album_id: 21,
          rating: 3.5,
          created_at: '2015-06-21 17:59:45.417387-08',
          updated_at: '2015-06-21 17:59:45.417387-08'
        },
        {
          id: 22,
          user_id: 1,
          album_id: 22,
          rating: 4,
          created_at: '2015-06-28 17:59:45.417387-08',
          updated_at: '2015-06-28 17:59:45.417387-08'
        },
        {
          id: 23,
          user_id: 1,
          album_id: 23,
          rating: 3.5,
          created_at: '2015-07-05 17:59:45.417387-08',
          updated_at: '2015-07-05 17:59:45.417387-08'
        },
        {
          id: 24,
          user_id: 1,
          album_id: 24,
          rating: 3,
          created_at: '2015-07-13 17:59:45.417387-08',
          updated_at: '2015-07-13 17:59:45.417387-08'
        },
        {
          id: 25,
          user_id: 1,
          album_id: 25,
          rating: 3,
          created_at: '2015-07-20 17:59:45.417387-08',
          updated_at: '2015-07-20 17:59:45.417387-08'
        },
        {
          id: 26,
          user_id: 1,
          album_id: 26,
          rating: 4,
          created_at: '2015-07-27 17:59:45.417387-08',
          updated_at: '2015-07-27 17:59:45.417387-08'
        }
      ])
      .then(() => {
          return knex.raw(`SELECT setval('users_albums_id_seq', (SELECT MAX(id) FROM users_albums));`)
    })
  }

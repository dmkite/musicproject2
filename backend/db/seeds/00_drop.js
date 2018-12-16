
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
  .then(() => {
    return knex('queues').del()
  })
  .then(() => {
    return knex('users_albums').del()
  })
  .then(() => {
    return knex('albums').del()
  })
  .then(() => {
    return knex('users').del()
  })

};

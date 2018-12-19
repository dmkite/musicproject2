const uuid = require('uuid')

exports.seed = function(knex, Promise) {
    return knex('albums').insert([
      {
        id: 1,
        name: 'Free the Universe',
        spotify_album_id: uuid(),
        img: ''
      },
      { id: 2, name: '<3 and Soul', spotify_album_id: uuid(), img: '' },
      { id: 3, name: 'Zaba', spotify_album_id: uuid(), img: '' },
      { id: 4, name: 'Seven Swans', spotify_album_id: uuid(), img: '' },
      { id: 5, name: 'Currents', spotify_album_id: uuid(), img: '' },
      { id: 6, name: 'The Cool', spotify_album_id: uuid(), img: '' },
      {
        id: 7,
        name: 'Modern Vampires of the City',
        spotify_album_id: uuid(),
        img: ''
      },
      {
        id: 8,
        name: 'Aeroplane Over the Sea',
        spotify_album_id: uuid(),
        img: ''
      },
      { id: 9, name: 'Lonerism', spotify_album_id: uuid(), img: '' },
      { id: 10, name: 'Miracle Mile', spotify_album_id: uuid(), img: '' },
      { id: 11, name: 'St. Vincent', spotify_album_id: uuid(), img: '' },
      { id: 12, name: 'Stay Gold', spotify_album_id: uuid(), img: '' },
      {
        id: 13,
        name: 'Asleep at Heaven\'s Gate',
        spotify_album_id: uuid(),
        img: ''
      },
      { id: 14, name: 'The Avalanche', spotify_album_id: uuid(), img: '' },
      {
        id: 15,
        name: 'Ambivalence Avenue',
        spotify_album_id: uuid(),
        img: ''
      },
      { id: 16, name: 'Torches', spotify_album_id: uuid(), img: '' },
      { id: 17, name: 'Shame, Shame', spotify_album_id: uuid(), img: '' },
      { id: 18, name: 'Michigan', spotify_album_id: uuid(), img: '' },
      { id: 19, name: 'Brothers', spotify_album_id: uuid(), img: '' },
      {
        id: 20,
        name: 'Silver Wilkinson',
        spotify_album_id: uuid(),
        img: ''
      },
      { id: 21, name: 'Voices', spotify_album_id: uuid(), img: '' },
      { id: 22, name: 'Writer\'s Block', spotify_album_id: uuid(), img: '' },
      { id: 23, name: 'An Awesome Wave', spotify_album_id: uuid(), img: '' },
      { id: 24, name: 'The Suburbs', spotify_album_id: uuid(), img: '' },
      {
        id: 25,
        name: 'Helplessness Blues',
        spotify_album_id: uuid(),
        img: ''
      },
      { id: 26, name: 'Knife Man', spotify_album_id: uuid(), img: '' }]

    )
    .then(() => {
      return knex.raw(`SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`)
    })
}


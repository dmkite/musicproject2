const uuid = require('uuid')

exports.seed = function(knex, Promise) {
  return knex('albums').insert([{
    id: '27',
    name: 'Free The Universe (E...',
    spotify_album_id: '6Ax8Neb7dEif3KUlJwj2P8',
    img:
      'https://i.scdn.co/image/e9ddf58854d6a85f27ef86fb6e57b797c3cadd91'
  },
  {
    id: '28',
    name: 'My <3',
    spotify_album_id: '7rf78GoGZ2QEt7Utt1M6ca',
    img:
      'https://i.scdn.co/image/e7ba6898a23b05dfb537c32d37202f8b9972202d'
  },
  {
    id: '29',
    name: 'ZABA',
    spotify_album_id: '14IOe7ahxQPTwUYUQX3IFi',
    img:
      'https://i.scdn.co/image/8ae8965e98d8c053075e4f9d42e5c5e033405a8a'
  },
  {
    id: '30',
    name: 'Seven Swans',
    spotify_album_id: '71M94qZwSYHxlae0EFxpsy',
    img:
      'https://i.scdn.co/image/4f0a83649841247ebe734053a3b2e202752c3336'
  },
  {
    id: '31',
    name: 'Currents',
    spotify_album_id: '79dL7FLiJFOO0EoehUHQBv',
    img:
      'https://i.scdn.co/image/05ba2339972970b53df22c114eff9d09c352bf0f'
  },
  {
    id: '32',
    name: 'Lupe Fiasco\'s The Co...',
    spotify_album_id: '0MihD70HInk2rDaChdAdEy',
    img:
      'https://i.scdn.co/image/5b5c0b5e2a7c08e281f7388f389abd0fa3d0ca76'
  },
  {
    id: '33',
    name: 'Modern Vampires of t...',
    spotify_album_id: '2Qi2SySN2ePZwMLDSv9Krn',
    img:
      'https://i.scdn.co/image/deb494a472f1e82cb0d410d8425ca5d273e8226c'
  },
  {
    id: '34',
    name: 'In the Aeroplane Ove...',
    spotify_album_id: '5COXoP5kj2DWfCDg0vxi4F',
    img:
      'https://i.scdn.co/image/e614108e0a6e7393372afc56e6ef9753296b926b'
  },
  {
    id: '35',
    name: 'Lonerism',
    spotify_album_id: '3C2MFZ2iHotUQOSBzdSvM7',
    img:
      'https://i.scdn.co/image/c69873ba5c8e10b054c1eacb859e9495c5e263f2'
  },
  {
    id: '36',
    name: 'Miracle Mile',
    spotify_album_id: '5S4tasGYxpQuSEWLYvgyQp',
    img:
      'https://i.scdn.co/image/fa55a06981a9c9ea706559768a40cdc2108e109d'
  },
  {
    id: '37',
    name: 'St. Vincent',
    spotify_album_id: '2CJnMhwEEkS8R1ctgt5llf',
    img:
      'https://i.scdn.co/image/3d11dfdcacbe35dd3095a785936360891f470b81'
  },
  {
    id: '38',
    name: 'Stay Gold',
    spotify_album_id: '6toF7GAattD7gLgqKbY8f9',
    img:
      'https://i.scdn.co/image/b7c1f139ee1013a6e12a0b2f6ac9ea3ac6f22606'
  },
  {
    id: '39',
    name: 'Asleep At Heaven\'s G...',
    spotify_album_id: '47B9Lff4byhHeFXL9Wr73F',
    img:
      'https://i.scdn.co/image/42e05c66cde4b4ffb74ea729dae0df9e209a52f5'
  },
  {
    id: '40',
    name: 'The Avalanche',
    spotify_album_id: '3rmsem3aWkMjGnBD3veUQL',
    img:
      'https://i.scdn.co/image/6431fdfa1b393017c2852a321b1159b3bd2763c8'
  },
  {
    id: '41',
    name: 'Ambivalence Avenue',
    spotify_album_id: '7ybrct8gCd1mWsHS32ID8w',
    img:
      'https://i.scdn.co/image/3f293302b46c107baba43d7c96389b4eb90cd177'
  },
  {
    id: '42',
    name: 'Torches',
    spotify_album_id: '7Kmmw7Z5D2UD5MVwdm10sT',
    img:
      'https://i.scdn.co/image/c3f13b4f7a674abda9aa36fd72fa341e918c0f26'
  },
  {
    id: '43',
    name: 'Shame, Shame (Deluxe...',
    spotify_album_id: '16XswZ18xhMs8qUTN51mRl',
    img:
      'https://i.scdn.co/image/ca278935a419e950848de139faf13b651ded71ab'
  },
  {
    id: '44',
    name: 'Michigan',
    spotify_album_id: '4mIfqTE8DOnFRFWUQH02Og',
    img:
      'https://i.scdn.co/image/5d06fc0e6823f93bff288df2b1e9fbe6f309ea97'
  },
  {
    id: '45',
    name: 'Brothers',
    spotify_album_id: '7qE6RXYyz5kj5Tll7mJU0v',
    img:
      'https://i.scdn.co/image/f38dbcca89c4a294dd5a35c02b9b35ea25561fe9'
  },
  {
    id: '46',
    name: 'Silver Wilkinson',
    spotify_album_id: '635cLXDOf3Kh5WA9c63xm8',
    img:
      'https://i.scdn.co/image/54d8c2f797b7e4a4b53c585aa7c462f8a903ae59'
  },
  {
    id: '47',
    name: 'Voices',
    spotify_album_id: '2R2Cwe4kI8b2WObXZ90wOC',
    img:
      'https://i.scdn.co/image/2a0ca3b7db7eee0c08837e5bfa71b134df89bda4'
  },
  {
    id: '48',
    name: 'Writer\'s Block',
    spotify_album_id: '3FDYmCinR2Mx94ukKJKDew',
    img:
      'https://i.scdn.co/image/02df17a13ce0c8ce29fa7dbd2220d0ea6962062e'
  },
  {
    id: '49',
    name: 'An Awesome Wave',
    spotify_album_id: '6k3vC8nep1BfqAIJ81L6OL',
    img:
      'https://i.scdn.co/image/a1dac609d1b8b3a6e415fffcdb53dc6d85393254'
  },
  {
    id: '50',
    name: 'The Suburbs',
    spotify_album_id: '3DrgM5X3yX1JP1liNLAOHI',
    img:
      'https://i.scdn.co/image/225897473593f8c27ba289d384ec1dfeb4c5b92e'
  },
  {
    id: '51',
    name: 'Helplessness Blues',
    spotify_album_id: '7LKzVm90JnhNMPF6qX21fS',
    img:
      'https://i.scdn.co/image/78889ab80a9a1eae6842dd3004930423b0a3e6f6'
  },
  {
    id: '52',
    name: 'Knife Man',
    spotify_album_id: '131vOQexOX9KXcOvcK4vM9',
    img:
      'https://i.scdn.co/image/61ffdd7a4522ec4ef173b686d08fc13c48e83604'
  },
  {
    id: '53',
    name: 'Sea Change',
    spotify_album_id: '5ieP11rJQvuYz0Ov3k03cy',
    img:
      'https://i.scdn.co/image/73bf6b5512a933336c2f3e61ae16ab8fb13ac5c0'
  },
  {
    id: '54',
    name: 'Thank Your Lucky Sta...',
    spotify_album_id: '7zPfNw88t2Xv2nVXWKqQls',
    img:
      'https://i.scdn.co/image/2409d6e5f9ec6ed2941ba932b3eae878cd28e133'
  },
  {
    id: '55',
    name: 'The Pinkprint',
    spotify_album_id: '1IOHcoY4gPRECxpIhVGmuq',
    img:
      'https://i.scdn.co/image/0b41f41ac5972b55228f486a4c26f5b0b9475613'
  },
  {
    id: '56',
    name: 'The Lion\'s Roar',
    spotify_album_id: '4l74hbWS9uJmGe4npUbsR5',
    img:
      'https://i.scdn.co/image/e2919aeb7f94d97c172902e7e55b56731174f1d0'
  },
  {
    id: '57',
    name: 'I Never Learn',
    spotify_album_id: '4fGqfyineAZmulNxgitERh',
    img:
      'https://i.scdn.co/image/41f8b6cb87363a745a75b6559a42bad4f5ded234'
  },
  {
    id: '58',
    name: 'The Sound Of The Smi...',
    spotify_album_id: '65IUZfizoxnc0WHnhEZjf3',
    img:
      'https://i.scdn.co/image/15072fc5d35127bdb0d9567bf89039cd2ff3105b'
  },
  {
    id: '59',
    name: 'Sonderlust',
    spotify_album_id: '3prBy9ITryUQUYKuUTn4EM',
    img:
      'https://i.scdn.co/image/bf0d3ce73671212b3dfdd4c83ae0f761e456617b'
  },
  {
    id: '60',
    name: 'Being No One, Going ...',
    spotify_album_id: '5GOHOQxjLxkcW9oXPJChBf',
    img:
      'https://i.scdn.co/image/9063c2a00abd0d821b978833fd138084d194b7a5'
  },
  {
    id: '61',
    name: 'Hot Thoughts',
    spotify_album_id: '25Z3GFmKx6ntosMpCSngnI',
    img:
      'https://i.scdn.co/image/e4bbc2551345ffe26aff1832e6ac28eab1bc8d7d'
  },
  {
    id: '62',
    name: 'Forcefield',
    spotify_album_id: '55pj3OVrpwedZVi8GUrChK',
    img:
      'https://i.scdn.co/image/087f94f015e3d21c13e2038a1c4e85303da30179'
  },
  {
    id: '63',
    name: 'good kid, m.A.A.d ci...',
    spotify_album_id: '3DGQ1iZ9XKUQxAUWjfC34w',
    img:
      'https://i.scdn.co/image/3af781757f24a5608db533730c906bdca3931998'
  },
  {
    id: '64',
    name: 'Showroom Of Compassi...',
    spotify_album_id: '01VQW8EUe8ZG0MrkiukGL8',
    img:
      'https://i.scdn.co/image/17eea987a057e2bb6c0f6c8eff591b3353a31820'
  },
  {
    id: '65',
    name: 'New Magnetic Wonder',
    spotify_album_id: '1pqW5uzTGkXqhlQ8zhYyff',
    img:
      'https://i.scdn.co/image/8bc8ff2be32011b2a5929f9b6bfc0b56bd269444'
  },
  {
    id: '66',
    name: 'Psychic Chasms',
    spotify_album_id: '4DM9H8BlhRv4ecFM7NBcVo',
    img:
      'https://i.scdn.co/image/2b0cf94c0e646682a982ef84a204f7c5bbd661ef'
  },
  {
    id: '67',
    name: 'What Now',
    spotify_album_id: '1BJMCEXQ7JmuVlJ6cYbe3x',
    img:
      'https://i.scdn.co/image/7afbf7c80b2bcd7966a361bef3e351bc6119e463'
  },
  {
    id: '68',
    name: 'Walking On A Dream',
    spotify_album_id: '04gYcIojJt78nYnN5oOrKt',
    img:
      'https://i.scdn.co/image/5998f89998bdd4c31e4897db799a5e826d4eef49'
  },
  {
    id: '69',
    name: 'The Electric Lady',
    spotify_album_id: '3bnHtSmmsgJiG82hGCmsq9',
    img:
      'https://i.scdn.co/image/3c6de56aefcd41b12ed9a27b9f293434794c26e5'
  },
  {
    id: '70',
    name: 'Legacy',
    spotify_album_id: '5Pr1sAQ9i2unvVaEHnKIB5',
    img:
      'https://i.scdn.co/image/f11233a02847d96120e2b754eb027040e678ebee'
  },
  {
    id: '71',
    name: 'another eternity',
    spotify_album_id: '4ymjpcGruNuUUUZOeGawLe',
    img:
      'https://i.scdn.co/image/da37e34124dc3d301528514291e7d153b7ef1cc4'
  },
  {
    id: '72',
    name: 'Funeral',
    spotify_album_id: '6ZB8qaR9JNuS0Q0bG1nbcH',
    img:
      'https://i.scdn.co/image/d60958619c86d218b8cc2f9ce382fd65722a475c'
  },
  {
    id: '73',
    name: 'Oczy Mlody',
    spotify_album_id: '1hnkDGUipQikSFdjRoBOFK',
    img:
      'https://i.scdn.co/image/78b8506a4f171494f536eefd2dcc39977788b96e'
  },
  {
    id: '74',
    name: 'Reflektor',
    spotify_album_id: '4E0m7AIVc2d2QZMrMNXdMZ',
    img:
      'https://i.scdn.co/image/b5c6831817c71854d4cf36ac11b5a5063a29e323'
  },
  {
    id: '75',
    name: 'Fleet Foxes',
    spotify_album_id: '6XzZ5pg9buAKNYg293KOQ8',
    img:
      'https://i.scdn.co/image/06a7498af8e3455a3bea2ce086a39c2b050cb002'
  },
  {
    id: '76',
    name: 'Neon Bible',
    spotify_album_id: '4GT6uZod4p5RiDMOVHOMme',
    img:
      'https://i.scdn.co/image/471c4a8e841b75be8c4a36d255aae18d504b7d19'
  },
  {
    id: '77',
    name: 'Up from Below',
    spotify_album_id: '39xrkt8RILtwa9DMyLkv32',
    img:
      'https://i.scdn.co/image/87fd1b33f3208d7d3a3bbfb3d4f22ab089dc0d4e'
  },
  {
    id: '78',
    name: 'american dream',
    spotify_album_id: '4AF1M7bGCFL3LHCtXUUXw5',
    img:
      'https://i.scdn.co/image/8af6ea3b8d6f520793470fbcb39964c03afc2176'
  },
  {
    id: '79',
    name: 'JR JR',
    spotify_album_id: '3shFtH3EfvyztGl2sdsmHS',
    img:
      'https://i.scdn.co/image/7c5b297d1f7972627854c8f4d2adcd838416ebaa'
  },
  {
    id: '80',
    name: 'A Mineral Love',
    spotify_album_id: '47riSLCeFOffFRi9BZ2eig',
    img:
      'https://i.scdn.co/image/bfd1ffd309a88680d4e48f7b2b1371827dff5c1d'
  },
  {
    id: '81',
    name: 'MASSEDUCTION',
    spotify_album_id: '4RoOGpdrgfiIUyv0kLaC4e',
    img:
      'https://i.scdn.co/image/94fadfd62c6a2d955b2a77f3c5152543c6c875a3'
  },
  {
    id: '82',
    name: 'Mind Bokeh',
    spotify_album_id: '4VXEMU4mlHvP5Zb8M83wM2',
    img:
      'https://i.scdn.co/image/39b64d7e1cc896f29073c64389a56d7c0bb3de4d'
  },
  {
    id: '83',
    name: 'Everything Now',
    spotify_album_id: '1DNojVW079FU9YnAMk3Cgr',
    img:
      'https://i.scdn.co/image/3aabf0f2f1410651247cb57d36f8e974f412f50a'
  },
  {
    id: '84',
    name: 'RELAXER',
    spotify_album_id: '3uHMSQ1cC1fFAi4WMnelQP',
    img:
      'https://i.scdn.co/image/6e8407c5d05630179f2b471b5c77e1ef50a4213e'
  },
  {
    id: '85',
    name: 'In Ghost Colours',
    spotify_album_id: '6k3dwEFYKsGrhS40jtiAGt',
    img:
      'https://i.scdn.co/image/b1ec16890ebc38ca6b8de12e0767982c57cbd732'
  },
  {
    id: '86',
    name: 'Coconut Oil',
    spotify_album_id: '5RVuRq4HKlj8LkapG1Tcrv',
    img:
      'https://i.scdn.co/image/a01a2cb299672bc5b9efd2dc8b63ee082f193000'
  },
  {
    id: '87',
    name: 'Planetarium',
    spotify_album_id: '0msgMFYRkWX6HixjvGOQHJ',
    img:
      'https://i.scdn.co/image/9b84b8d882f769015977bbfcaa2e494ce1da2974'
  }]

    )
    .then(() => {
      return knex.raw(`SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`)
    })
}

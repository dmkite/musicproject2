
const [path, query] = window.location.pathname.split('?')
const loginSignup = require('./src/login-signup/controller')
const musicProject = require('./src/music-project/controller')
const playlist = require('./src/playlist/controller')
const yourAlbums = require('./src/your-albums/controller')
const queue = require('./src/queue/controller')

const pageInitializer = {
    '/': loginSignup.init,
    '/index.html': loginSignup.init,
    '/signup.html': loginSignup.init,
    '/music-project.html': musicProject.init,
    '/playlist.html': playlist.init,
    '/albums.html': yourAlbums.init,
    '/queue.html': queue.init
}

pageInitializer[path]()

// const model = require('./src/music-project/model')
// const token = localStorage.getItem('token')
// if (!token) console.log('uhoh')
// return model.authenticate(token)
//     .then(result => {
//         localStorage.setItem('userId', result.data.userInfo.id)
//         localStorage.setItem('spotify_playlist_id', result.data.userInfo.spotify_playlist_id)
//         document.querySelector('.welcome').textContent += `, ${result.data.userInfo.f_name}`
//         const div = document.createElement('div')
//         div.textContent = result.data.userInfo.f_name[0]
//         div.classList.add('userLetter')
//         document.querySelector('.welcome').appendChild(div)
//     })
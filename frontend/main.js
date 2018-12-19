
const [path, query] = window.location.pathname.split('?')
const loginSignup = require('./src/login-signup/controller')
const musicProject = require('./src/music-project/controller')
const playlist = require('./src/playlist/controller')
const yourAlbums = require('./src/your-albums/controller')

const pageInitializer = {
    '/': loginSignup.init,
    '/index.html': loginSignup.init,
    '/signup.html': loginSignup.init,
    '/music-project.html': musicProject.init,
    '/playlist.html': playlist.init,
    '/your-albums.html': yourAlbums.init
}

pageInitializer[path]()

const [path, query] = window.location.pathname.split('?')
const login = require('./src/login')
const signup = require('./src/signup')
const musicProject = require('./src/music-project.js')

const pageInitializer = {
    '/': login.init,
    '/index.html': login.init,
    '/signup.html': signup.init,
    '/music-project.html': musicProject.init
}

pageInitializer[path]()
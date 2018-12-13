
const [path, query] = window.location.pathname.split('?')
const loginSignup = require('./src/login-signup/controller')
const musicProject = require('./src/music-project/controller')

const pageInitializer = {
    '/': loginSignup.init,
    '/index.html': loginSignup.init,
    '/signup.html': loginSignup.init,
    '/music-project.html': musicProject.init
}

pageInitializer[path]()
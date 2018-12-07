
const [path, query] = window.location.pathname.split('?')
const login = require('./src/login')
const signup = require('./src/signup')

const pageInitializer = {
    '/': login.init,
    '/index.html': login.init,
    '/signup.html': signup.init
}

pageInitializer[path]()
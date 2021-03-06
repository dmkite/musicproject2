const model = require('../models/auth')
const jwt = require('jsonwebtoken')

function login(req, res, next) {
    let { username, password } = req.body
    if (!username || !password) return next({ status: 400, message: 'Error with username or password' })
    username = username.toLowerCase()
    return model.login(username, password)
        .then(result => {
            const payload = {
                exp: (Date.now() / 1000) + 7200,
                sub: result
            }
            const token = jwt.sign(payload, process.env.SECRET)
            res.status(200).send({ token })
        })
        .catch(next)
}

function authenticate(req, res, next) {
    const [, token] = req.headers.authorization.split(' ')
    if (!token) return next({ status: 401, message: 'Unauthorized, no token' })
    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if (err) return next({ status: 401, message: 'Unauthorized, token not confirmed' })
        req.claim = payload
        next()
    })
}

function authStatus(req, res, next) {
    res.status(200).send({ userInfo: req.claim.sub })
}

function checkRequest(req, res, next) {
    const userId = req.params.userId
    if (userId != req.claim.sub.id) return next({ status: 401, message: 'Unauthorized, ids dont match' })
    next()
}   

function spotify(req, res, next){
    return model.spotify(req.body)
    .then(result => {
        res.status(200).send(result.data)
    })
    .catch(err => next(err))
}

function refresh(req, res, next){
    return model.spotify(req.body)
    .then(result =>{
        res.status(200).send(result.data)
    })
    .catch(err => next(err))
}

module.exports = {login, authenticate, authStatus, checkRequest, spotify, refresh}
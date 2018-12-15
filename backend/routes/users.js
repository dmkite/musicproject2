const express = require('express')
const router = express.Router({mergeParams:true})
const ctrl = require('../controllers/users')

router.post('/signup', ctrl.signup)

router.use('/:userId/queue', require('./queue'))

module.exports = router


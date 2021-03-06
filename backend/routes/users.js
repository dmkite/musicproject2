const express = require('express')
const router = express.Router({mergeParams:true})
const ctrl = require('../controllers/users')

router.post('/signup', ctrl.signup)
router.use('/:userId/queue', require('./queue'))
router.use('/:userId/albums', require('./albums'))
router.use('/:userId/songs', require('./songs'))
router.use('/:userId/playlist', require('./playlist'))

module.exports = router


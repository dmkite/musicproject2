const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/auth')

router.get('/token', ctrl.authenticate)
router.post('/token', ctrl.login)
router.use('/spotify', ctrl.spotify)
router.use('/refresh', ctrl.refresh)

module.exports = router
const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/playlist')
const authCtrl = require('../controllers/auth')

router.post('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.playlist)

module.exports = router
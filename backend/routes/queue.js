const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/queue')
const authCtrl = require('../controllers/auth')

router.post('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.add)


module.exports = router
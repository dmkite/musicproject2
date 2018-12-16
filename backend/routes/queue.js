const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/queue')
const authCtrl = require('../controllers/auth')

router.post('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.add)
router.get('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.all)
router.get('/current', authCtrl.authenticate, authCtrl.checkRequest, ctrl.current)
router.delete('/albums/:albumId', authCtrl.authenticate, authCtrl.checkRequest, ctrl.del)


module.exports = router
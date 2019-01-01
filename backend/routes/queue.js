const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/queue')
const authCtrl = require('../controllers/auth')

router.get('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.all)
router.get('/current', authCtrl.authenticate, authCtrl.checkRequest, ctrl.current)
router.post('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.add)
router.delete('/albums/:albumId', authCtrl.authenticate, authCtrl.checkRequest, ctrl.del)
router.patch('/', authCtrl.authenticate, authCtrl.checkRequest, ctrl.update)

module.exports = router
const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/albums')
const authCtrl = require('../controllers/auth')

router.post('/', ctrl.add)
router.post('/:albumId/songs', ctrl.addSong)
router.get('/', ctrl.all)

module.exports = router
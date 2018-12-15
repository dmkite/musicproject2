const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/albums')

router.post('/', ctrl.add)
router.post('/:albumId/songs', ctrl.addSongs)

module.exports = router
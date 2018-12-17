const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/songs')

router.get('/', ctrl.getSongs)

module.exports = router
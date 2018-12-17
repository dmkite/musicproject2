const Model = require('../../_Model')

const model = new Model(`/users/${localStorage.getItem('userId')}/songs`)

module.exports = model

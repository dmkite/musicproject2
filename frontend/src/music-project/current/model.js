const Model = require('../../_Model')

const model = new Model(`/users/${localStorage.getItem('userId')}/queue/current`)

module.exports = model
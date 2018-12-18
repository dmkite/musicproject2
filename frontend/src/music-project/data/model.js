const Model = require('../../_Model')

const model = new Model(`/users/${localStorage.getItem('userId')}/albums`)

module.exports = model
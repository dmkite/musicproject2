const Model = require('./_Model')
const userId = localStorage.getItem('userId')

const model = new Model(`/users/${userId}/queue`)


module.exports = model
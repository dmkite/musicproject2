const model = require('../music-project/queue/model')
const view = require('./view')
function init(){
    return model.all()
    .then(result => {
       const queueHTML = result.data.map(album => view.queueTemplate(album))
       document.querySelector('#queue main').innerHTML = queueHTML.join('')
    })
}

module.exports = {init}
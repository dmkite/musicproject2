const model = require('./model')
const queueView = require('../queue/view')
const view = require('./view')
function init(){
    return model.all()
    .then(result => {
        if(!result) return
        else console.log(result)
        document.querySelector('#current').innerHTML += queueView.albumTemplate(result.data)
        document.querySelector('#current').innerHTML += view.actionBlock()
        document.querySelector('#current .emptyState').remove()
    })
    
}

module.exports = {init}
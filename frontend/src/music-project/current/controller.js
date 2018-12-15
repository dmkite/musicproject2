const model = require('./model')
const view = require('../queue/view')

function init(){
    return model.all()
    .then(result => {
        if(!result) return
        else console.log(result)
        document.querySelector('#current').innerHTML += view.albumTemplate(result.data)
        document.querySelector('#current .emptyState').remove()
    })
    
}

module.exports = {init}
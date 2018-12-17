const model = require('./model')
const view = require('./view')

function init(){
    return model.all(localStorage.getItem('userId'))
    .then(result =>{
        if(result.data.length === 0) document.querySelector('#theHits').innerHTML += view.emptyTemplate()
        else{
            const hitHTML = result.data.map(song => view.favSongTemplate(song))
            document.querySelector('.songHolder').innerHTML += hitHTML.join('')
        }
    })
    .catch(err => {
        console.error(err)
    })
}

module.exports = {init}
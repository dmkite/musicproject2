const model = require('../music-project/queue/model')
const view = require('./view')
function init(){
    return model.all()
    .then(result => {
        console.log(result)
       const queueHTML = result.data.map(album => view.queueTemplate(album))
       document.querySelector('#queue main').innerHTML = queueHTML.join('')
       addListeners()
    })
}

function addListeners(){
    const queueUpBtns = document.querySelectorAll('.queueUp i')
    const queueDownBtns = document.querySelectorAll('.queueDown i')

    for(let upBtn of queueUpBtns){
        upBtn.addEventListener('click', function(e){moveUp(e)})
    }

    for(let downBtn of queueDownBtns){
        downBtn.addEventListener('click', function(e){moveDown(e)})
    }
}

function moveUp(e){
    console.log(e.target)
}

function moveDown(e){
    console.log(e.target)
}

module.exports = {init}
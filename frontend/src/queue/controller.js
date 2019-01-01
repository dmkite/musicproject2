const model = require('../music-project/queue/model')
const view = require('./view')
const prepHeader = require('../utils')

function init(){
    prepHeader()
    return model.all()
    .then(result => {
       const queueHTML = result.data.map(album => view.queueTemplate(album))
       document.querySelector('#queue main').innerHTML = queueHTML.join('')
       addListeners()
    })
}

function addListeners(){
    const queueUpBtns = document.querySelectorAll('.queueUp i')
    const queueDownBtns = document.querySelectorAll('.queueDown i')
    const deleteBtns = document.querySelectorAll('.text button')

    for(let upBtn of queueUpBtns){
        upBtn.addEventListener('click', function(e){movePlace(e, 'up')})
    }

    for(let downBtn of queueDownBtns){
        downBtn.addEventListener('click', function(e){movePlace(e, 'down')})
    }

    deleteBtns.forEach(item => item.addEventListener('click', function(e){del(e)}))

    omitOptions()
}

function omitOptions(){
    let queueItems = document.querySelectorAll('.queueItem')
    for(let queueItem of queueItems){
        if (queueItem.getAttribute('data-place-in-queue') == '1'){
            queueItem.children[2].innerHTML = ' <i class="fas fa-arrow-circle-up omitted"></i>'
        }
        if(queueItem.getAttribute('data-place-in-queue') == queueItems.length){
            queueItem.children[3].innerHTML = ' <i class="fas fa-arrow-circle-down omitted"></i>'
        }
    }
}

function movePlace(e, direction){
    const items = document.querySelectorAll('.queueItem')
    const newQueue = []
    const itemToMoveUp = e.target.parentElement.parentElement
    const oldPlace = Number(itemToMoveUp.getAttribute('data-place-in-queue'))
    if(direction === 'up'){
        const itemToReplace = document.querySelector(`[data-place-in-queue="${oldPlace - 1}"]`)
        itemToReplace.setAttribute('data-place-in-queue', oldPlace)
        itemToMoveUp.setAttribute('data-place-in-queue', oldPlace - 1)
    }
    else{
        const itemToReplace = document.querySelector(`[data-place-in-queue="${oldPlace + 1}"]`)
        itemToReplace.setAttribute('data-place-in-queue', oldPlace)
        itemToMoveUp.setAttribute('data-place-in-queue', oldPlace + 1)
    }
    items.forEach(item => newQueue.push(collectBody(item)))
    const promiseArray = newQueue.map(item => model.update(item))
    return Promise.all(promiseArray)
    .then(() => {
        document.querySelector('#queue main').innerHTML = ''
        return init()
    })
}

function collectBody(item){
    const body = {
        id: item.getAttribute('data-id'), 
        place_in_queue: item.getAttribute('data-place-in-queue')
    }
    return body
}

function del(e){
    const albumId = e.target.parentElement.parentElement.getAttribute('data-id')
    return model.delete(albumId)
    .then(() => {
        document.querySelector('main').innerHTML = ''
        return init()
    })
    .catch(err => console.error(err))
}


module.exports = {init}
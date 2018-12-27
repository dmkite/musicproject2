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

function moveUp(e){
    const items = document.querySelectorAll('.queueItem')
    const newQueue = []
    const itemToMoveUp = e.target.parentElement.parentElement
    const oldPlace = Number(itemToMoveUp.getAttribute('data-place-in-queue'))
    const itemToReplace = document.querySelector(`[data-place-in-queue="${oldPlace - 1}"]`)
    itemToReplace.setAttribute('data-place-in-queue', oldPlace)
    itemToMoveUp.setAttribute('data-place-in-queue', oldPlace - 1)
    
    items.forEach(item => newQueue.push(collectBody(item)))
    return model.update(newQueue[0])
    .then(result => {
        console.log('hitting result')
        return model.update(newQueue[0])
    })
    .then(result => console.log(result))
    
}


function moveDown(e){
    console.log(e.target)
}

function collectBody(item){
    const body = {
        id: item.getAttribute('data-id'), 
        // user_id: localStorage.getItem('userId'), 
        // album: item.children[1].children[0].textContent, 
        // artist: item.children[1].children[1].textContent, 
        // img: item.children[0].getAttribute('src'), 
        // spotfify_album_id: item.getAttribute('data-spotify-album-id'), 
        // is_current: item.classList.contains('isCurrent') ? true : false, 
        place_in_queue: item.getAttribute('data-place-in-queue')//, 
        // created_at: item.getAttribute('data-created-at'), 
        // updated_at: item.getAttribute('data-updated-at')
    }
    return body
}

module.exports = {init}
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
    // return model.update(newQueue[0])
    const promiseArray = newQueue.map(item => model.update(item))
    return Promise.all(promiseArray)
    .then(results => {
        // return model.update(newQueue[0])
        document.querySelector('#queue main').innerHTML = ''
        return init()
    })
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

function del(e){
    const albumId = e.target.parentElement.parentElement.getAttribute('data-id')
    console.log(albumId)
    return model.delete(albumId)
    .then(result => {
        console.log(result)
        document.querySelector('main').innerHTML = ''
        return init()
    })
    .catch(err => console.error(err))
}


module.exports = {init}
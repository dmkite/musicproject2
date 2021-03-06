const model = require('./model')
const view = require('./view')
const queue = require('../queue/controller')

function init(){
    const val = encodeInput()
    const query = createQuery(val)
    if (!!query){
        return model.searchForAlbum(query)
        .then(result => {
            autocomplete(result.data.albums.items)
        })
    }
}

function createQuery(val) {
    if (!!val){
        const query = `?q=${val}&type=album%2Cartist&limit=5`
        return query
    }
    return false
}

function encodeInput() {
    let val = document.querySelector('#musicSearch input').value
    if (!!val){
        val = val.split(' ')
        val = val.join('%20')
        return val
    }
    return false
}

function autocomplete(albums){
    const autocompleteHolder = document.querySelector('.autocomplete')
    if(albums.length === 0) return autocompleteHolder.innerHTML = '<h3>No results :(</h3>' 
    autocompleteHTML = albums.reduce((acc, album) => {
        acc.push(view.autocompleteTemplate(album))
        return acc
    }, [])
    autocompleteHTML.push('<span class="minimize">-</span>')
    autocompleteHolder.innerHTML = autocompleteHTML.join('')
    document.querySelector('.minimize').addEventListener('click', function(){autocompleteHolder.innerHTML = ''})
    prepAlbumEntries()
}

function prepAlbumEntries(){
    const albumEntries = document.querySelectorAll('.entry')
    for(let entry of albumEntries){
        entry.onclick = function(e){select(e)}
    }
}

function select(e){
    const albumId = e.currentTarget.getAttribute('data-id')
    return model.getAlbum(albumId)
    .then(result => {
        const tracks = result.data.tracks.items.map(item => {
            item.duration_ms = msToMins(item.duration_ms)
            return view.tracksTable(item)
        })
        document.querySelector('.autocomplete').innerHTML = view.albumTemplate(result.data, tracks.join(''))
        return addButtonListeners()
    })
}

function msToMins(num){
    let secs = Math.floor((num / 1000) % 60)
    if(secs < 10){
        secs = '0' + secs.toString()
    }
    if(secs > 10 && secs.toString().length === 1){
        secs = secs.toString() + '0'
    }
    const mins = Math.floor((num / 1000) / 60)
    return `${mins}:${secs}`
}

function addButtonListeners(){
    document.querySelector('.albumSelect button').onclick = function(e){addToQueue(e)}
    document.querySelector('.albumSelect .close').onclick = close
}

function addToQueue(e){
    const albumId = e.currentTarget.parentElement.getAttribute('data-id')
    document.querySelector('#musicSearch input').value = ''
    return queue.addToDbQueue(albumId)
}

function close(){
    document.querySelector('.albumSelect').remove()
}

module.exports = {init, createQuery, msToMins}
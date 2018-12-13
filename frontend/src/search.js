// const axios = require('axios')

// function init(){
//     const val = encode()
//     console.log(val)
//     const query = `?q=${val}&type=album%2Cartist&limit=5`
//     console.log(query)
//     return axios('https://api.spotify.com/v1/search' + query, {
//         method:'get',
//         headers:{
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${localStorage.getItem('access_token')}`
//         }
//     })
//     .then(result => {
//         console.log(result)
//         autocomplete(result.data)
//     })
//     .catch(err =>{console.log(err)})
// }

// function encode(){
//     let val = document.querySelector('#musicSearch input').value
//     val = val.split(' ')
//     val = val.join('%20')
//     return val
// }

// function autocomplete(obj){
//     const autoHTML = []
//     obj.albums.items.forEach(item => autoHTML.push(autocompleteTemplate(item)))
//     // autoHTML.push('<h2>Artists</h2>')
//     document.querySelector('.autocomplete').innerHTML = autoHTML.join('')
// }

// function autocompleteTemplate(item){
//     return `
//     <div class="entry" data-id="${item.id}">
//         <img src="${item.images[2].url}"></img>
//         <div class="content">
//             <h3>${item.name}</h3>
//             <p>${item.artists[0].name}</p>
//         </div>
//     </div>`
// }
// module.exports = {init}
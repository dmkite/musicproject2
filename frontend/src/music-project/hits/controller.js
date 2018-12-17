const model = require('./model')

function init(){
    return model.all(localStorage.getItem('userId'))
    .then(result =>{
        console.log(result)
        
    })
    .catch(err => {
        console.error(err)
    })
}

module.exports = {init}
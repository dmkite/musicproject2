const view = require('./view')

function init(){
    const background = document.querySelector('#background')
    let albumFlipHTML = []
    for(let i = 1; i <= 30; i++){
        const num1 = Math.floor(Math.random() * 18) + 1
        const num2 = Math.floor(Math.random() * 18) + 1
        albumFlipHTML.push(view.albumFlipTemplate(num1, num2))
    }
    background.innerHTML += albumFlipHTML.join('')
    // randomFlips()
}

function randomFlips(){
    const cards = document.querySelectorAll('.card-front')
    while (true){
        let rand = Math.floor(Math.random() * cards.length)
        setTimeout(function(){
            cards[rand].classList.add('do-flip')
            setTimeout(function(){
                cards[rand].style.transform = `rotateY(-180deg)`
            }, 2000)
        }, 0)
    }

}

module.exports = {init}
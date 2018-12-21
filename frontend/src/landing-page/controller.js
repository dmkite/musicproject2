const view = require('./view')

function init(){
    const [width, height] = getViewport()
    let numCovers = Math.ceil(((width  * 1.1) / 100) * ((height * 1.1) /100) )

    const background = document.querySelector('#background')
    
    let albumFlipHTML = []
    for(let i = 1; i <= numCovers; i++){

        const num1 = Math.floor(Math.random() * 50) + 1
        const num2 = Math.floor(Math.random() * 50) + 1
        albumFlipHTML.push(view.albumFlipTemplate(num1, num2))
    }
    background.innerHTML += albumFlipHTML.join('')
    addAnimation()
}

function addAnimation() {
    const flipping = setInterval(
        function () {
            const cards = document.querySelectorAll('.card')
            let rand = Math.floor(Math.random() * cards.length)
            cards[rand].classList.toggle('do-flip')
        }, 1500)

    const flipping2 = setInterval(
        function () {
            const cards = document.querySelectorAll('.card')
            let rand = Math.floor(Math.random() * cards.length)
            cards[rand].classList.toggle('do-flip')
        }, 3333)
}

function getViewport() {
    let viewPortWidth;
    let viewPortHeight;
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
            viewPortHeight = document.documentElement.clientHeight
    }
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

module.exports = {init}
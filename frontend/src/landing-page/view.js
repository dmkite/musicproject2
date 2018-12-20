function albumFlipTemplate(num1, num2){
    return  `
        <div class="card-wrapper">
            <div class="card">
                <div class="card-front" style="background-image:url('img/a${num1}.jpg')"></div>
                <div class="card-back" style="background-image:url('img/a${num2}.jpg')"></div>
            </div>
        </div >`
}

module.exports = {albumFlipTemplate}


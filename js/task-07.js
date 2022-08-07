const fontCont = document.querySelector(`#font-size-control`)

const textSize = document.querySelector(`#text`)

fontCont.addEventListener(`input`,changeFontSize
)
function changeFontSize(event) {
    textSize.style.fontSize = `${ event.currentTarget.value }px `; 
}
const btnEl = document.querySelectorAll(`#counter button` )

const valueEl = document.querySelector(`span`)
let counterValue = 0;
function decrement() {
    
    valueEl.textContent = (counterValue -= 1)
}

function increment() {
        valueEl.textContent = (counterValue = 1)
}



btnEl[0].addEventListener(`click`, decrement)
    
btnEl[1].addEventListener(`click`,increment)




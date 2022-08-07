
const  input = document.querySelector(`input`)
const El = document.querySelector(`input[data-length="6"] `)
const style = document.querySelector(`style`)
console.log(El.dataset.length)


input.addEventListener(`blur`, inputColor)
function inputColor(event) {
    console.log(event.currentTarget.length)
    console.log(El.dataset.length)
    if (event.currentTarget.value.length === Number(El.dataset.length)) {
       input.classList.remove(`invalid`)
        return input.classList.add(`valid`)
        
        
    }
    input.classList.remove(`valid`)
    input.classList.add(`invalid`)
    
}

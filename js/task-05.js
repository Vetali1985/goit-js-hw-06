const refs = {
    inputEl: document.querySelector(`input`),
    spanEl: document.querySelector(`span`)
}
console.log(refs.inputEl)
console.log(refs.spanEl)
refs.inputEl.addEventListener(`input`, enterName)

function enterName(event) {
     refs.spanEl.textContent = (event.currentTarget.value)   
}
    

const form = document.querySelector(`.login-form`)
console.log(form)
form.addEventListener(`submit`, onFormSubmit )
function onFormSubmit (event) {
    event.preventDefault();
    console.log(`click`)

    const formEl = event.currentTarget.elements
    console.log(formEl)
    // const email = formEl.email.value
    // const password = formEl.password.value
    const formData = {
        email : formEl.email.value,
        password : formEl.password.value
}


    if (formEl.email.value === ''|| formEl.password === '') {
        return alert(`All fields must be filled :( `)
    } 
     console.log(formData)
event.currentTarget.reset()
}
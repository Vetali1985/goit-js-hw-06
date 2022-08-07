function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEL = document.querySelector(`.change-color `)
console.log(buttonEL)
const bodyEl = document.querySelector(`body`)
console.log(bodyEl)
const valueColor = document.querySelector(`.color`)


buttonEL.addEventListener(`click`, onChangeColor)

function onChangeColor(event) {
  event.preventDefault()
  const colorRandom = getRandomHexColor();
  valueColor.textContent = `${colorRandom}`
  bodyEl.style.backgroundColor = colorRandom; 
  valueColor.innerHtml = `${colorRandom}`
  console.log(colorRandom)
}
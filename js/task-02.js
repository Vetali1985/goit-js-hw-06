const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const task = document.querySelector(`#ingredients`)
 ingredients.forEach(el => {
 const ingEl = document.createElement(`li`)
  ingEl.classList.add(`item`)
  ingEl.textContent = (el)
   task.append(ingEl)
   
})


  
  
 

 

// console.log(rt)


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);



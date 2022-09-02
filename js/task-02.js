const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const task = document.querySelector(`#ingredients`)
 const rt = ingredients.map(el => {
 const ingEl = document.createElement(`li`)
  ingEl.classList.add(`item`)
   ingEl.textContent = (el);
   
   return ingEl;
})

task.append(...rt)
  
  
 

 

// console.log(rt)


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);



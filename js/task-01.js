const itemEl = document.querySelectorAll(`li.item`)

console.log('Number of categories:', itemEl.length)
    

const itemsCategories = document.querySelectorAll('li.item')

itemsCategories.forEach(item => {

    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}
        `)
})

      
      


const numbers = [1, 8, 5, 9]

const numbersReduced = numbers.reduce((accumulator, item) => {
 return accumulator += item
}, 0) 


const numbersReducedTest = numbers.reduce((accumulator, item) => (accumulator += item), 0) 


const items = [
  {
    name: 'Apple',
    category: 'fruit',
  },
  {
    name: 'Onion',
    category: 'vegetable',
  },
  {
    name: 'orange',
    category: 'fruit',
  },
  {
    name: 'lettuce',
    category: 'vegetable',
  },
];

const groupedItems = items.reduce((acc,item) => {
  const category = item.category

  if(!acc[category]){
    acc[category] = []
  }

  acc[category].push(item)
  return acc
}, {})

console.log(groupedItems)
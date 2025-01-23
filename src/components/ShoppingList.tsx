import { List } from './List';
import './ShoppingList.css';
import { useState } from 'react';

const standardShoppingList = [
  'Pão',
  'Leite',
  'Ovos',
  'Arroz',
  'Feijão',
  'Manteiga',
  'Café',
  'Açúcar',
  'Macarrão',
  'Queijo',
  'Carne',
  'Frutas',
  'Legumes',
  'Detergente',
  'Papel higiênico',
];

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    if (item.trim() !== '') {
      setShoppingList([...shoppingList, item]);
    } else {
      alert('Não pode ser vazio!');
    }
  };

  const handleAddStandardList = () => {
    setShoppingList(shoppingList.concat(standardShoppingList));
  };

  const numbers = [1, 8, 5, 9];

  const numbersReduced = numbers.reduce((accumulator, item) => {
    return (accumulator += item);
  }, 0);

  console.log('numbersReduced', numbersReduced);

  const numbersReducedTest = numbers.reduce(
    (accumulator, item) => (accumulator += item),
    0
  ); 

   console.log('numbersReducedTest', numbersReducedTest);


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

   const groupedItems = items.reduce((acc, item) => {
     const category = item.category;

     if (!acc[category]) {
       acc[category] = [];
     }

     acc[category].push(item.name);
     return acc;
   }, {});

   console.log('groupedItems', groupedItems);
  return (
    <div className="shoppingList">
      <div className="header">
        <h2 className="header__title">Shopping list</h2>
      </div>

      <div className="form">
        <input
          className="form__input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="form__button" onClick={handleSubmit}>
          +
        </button>
      </div>

      <div className="list">
        <div className="list__products">
          <p className="list__title">Item</p>
          <div className="list__buttons">
            <button>+3</button>
            <button>+</button>
            <button>-</button>
            <button>-3</button>
          </div>
        </div>
        <div className="list__products">
          <p className="list__title">Item</p>
          <div className="list__buttons">
            <button>+3</button>
            <button>+</button>
            <button>-</button>
            <button>-3</button>
          </div>
        </div>
      </div>

      <List handleAddStandardList={handleAddStandardList} shoppingList={shoppingList} />
    </div>
  );
};

export default ShoppingList;

// form;

// list;

// cart;

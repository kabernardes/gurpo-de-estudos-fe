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
  const [shoppingList, setShoppingList] = useState([]);
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

  return (
    <div className="list">
      <h2 className="list__title">Shopping list</h2>
     
      <div className='list__form'>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={handleSubmit}>+</button>
      </div>
        
      <div className="list__container__item">
        <p>Item</p>
        <button>+3</button>
        <button>+</button>
        <button>-</button>
        <button>-3</button>
      </div>
      
      <div className="list__container__list">
        <div className="title-group">
          <h3>List</h3>
          <button onClick={handleAddStandardList}>Add list</button>
        </div>

        <ul>
          {shoppingList?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;

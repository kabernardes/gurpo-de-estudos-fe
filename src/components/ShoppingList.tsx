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

      <div className="cart">
        <div className="cart__header">
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

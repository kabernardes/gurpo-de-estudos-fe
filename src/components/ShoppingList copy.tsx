import './ShoppingList.css';
import { useState } from 'react'; // ta certo isso?

/*
  eu 🧜‍♂️ e meus manos 🧑‍🤝‍🧑 ❤️ tipagem 🤓
  const str: String = eu 🧜‍♂️ e meus manos 🧑‍🤝‍🧑 odiamos 🤬 tipagem 😫
*/

const listaDeCompras = [
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
  const [inputData, setInputData] = useState('');

  console.log('Shopping List:' + shoppingList);
  console.log('Input data:' + inputData);

  const handleClick = () => {
    if (inputData.trim() !== '') {
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
      setShoppingList([...shoppingList, inputData]);
      setInputData('');
    } else {
      alert('Não pode ser vazio!');
    }
  };

  const handleAddList = () => {
    setShoppingList(shoppingList.concat(listaDeCompras));
  };

  return (
    <>
      <h2 className="list__title">Shopping list</h2>
      <div className="list__container">
        <div>
          <div className="list__container__input">
            <input
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />{' '}
            {/* two-way data binding */}
            <button onClick={handleClick}>+</button>
          </div>

          {/* <div className="list__container__item">
            <p>Item</p>
            <button>+3</button>
            <button>+</button>
            <button>-</button>
            <button>-3</button>
          </div> */}
        </div>
        <div className="list__container__list">
          <h3>List</h3>
          <ul>
            {/* passou na hora da call, mas não é recomendado usar index como key de map, mais info sobre na doc */}
            {/* https://legacy.reactjs.org/docs/lists-and-keys.html */}
            {shoppingList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleAddList}>Add list</button>
      </div>
    </>
  );
};

export default ShoppingList;

import './ShoppingList.css';
import { useState } from 'react';

//mudei o nome da constante para inglês, como discutimos na call, não é bacana misturar as linguagens dessa forma
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
  //mudei esse nome de inputData para item para ficar mais semântico, só de ler sei o que é.
  const [item, setItem] = useState('');

  //mudei o nome desse handle para handleSubmit para ficar mais semântico
  const handleSubmit = () => {
    if (item.trim() !== '') {
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
      setShoppingList([...shoppingList, item]);
    } else {
      alert('Não pode ser vazio!');
    }
  };

  //alterei o nome desse handle tbm porque temos várias listas, estamos adicionando a 'padrão' aqui.
  const handleAddStandardList = () => {
    // lembrem-se sempre de procurar antes de existe uma solução simples para manipular os dados que eu quero no mdn.
    setShoppingList(shoppingList.concat(standardShoppingList));
  };

  return (
    <>
      <h2 className="list__title">Shopping list</h2>
      <div className="list__container">
        <div>
          <input value={item} onChange={(e) => setItem(e.target.value)} />
          <button onClick={handleSubmit}>+</button>
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
            {shoppingList?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleAddStandardList}>Add list</button>
      </div>
    </>
  );
};

export default ShoppingList;

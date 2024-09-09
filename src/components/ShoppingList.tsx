import './ShoppingList.css';

const ShoppingList = () => {
  return (
    <>
      <h2 className="list__title">Shopping list</h2>
      <div className="list__container">
        <div>
          <div className="list__container__input">
            <input />
            <button>+</button>
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
          <button>Add random list</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;

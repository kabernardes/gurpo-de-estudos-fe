type ListProps = {
  handleAddStandardList: () => void,
  shoppingList: string[],
}

export const List = ({ handleAddStandardList, shoppingList }: ListProps) => {
  return (
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
  );
};

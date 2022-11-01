import React, {useState} from 'react';
import Item from '../../Components/Item/Item';
import './App.css';

interface ItemProps {
  hasItem: boolean;
  clicked: boolean;
  id: number;
}

const App = () => {
  const [items, setItems] = useState<ItemProps[]>([]);

  const createItems = () => {
    const items = [];
    const randomId = Math.floor(35 * Math.random());

    for (let i = 0; i < 36; i++) {
      const item =  {hasItem: false, clicked: false, id: i};
      items.push(item);
    }

    items[randomId].hasItem = true;

    setItems(items);
  };

  if (items.length === 0) {
    createItems();
  }

  const changeItem = (id: number) => {
    if (!items[id].clicked) {
      const itemsCopy = [...items];
      itemsCopy[id].clicked = true;
      setItems(itemsCopy);
    }
  };

  return (
    <div className="container">
      <div className="App">
        {items.map(item => (
          <Item
            key={item.id}
            clicked={item.clicked}
            opened={item.hasItem}
            onItemClick={() => changeItem(item.id)}/>
        ))}
      </div>
    </div>
  );
};

export default App;

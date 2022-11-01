import React from 'react';
import './Item.css';

interface ItemProps {
  clicked: boolean;
  opened: boolean;
  onItemClick: React.MouseEventHandler;
}

const Item: React.FC<ItemProps> = (props) => {
  let isCloseOrOpen = 'close';
  let isWinOrNot = '';

  if (props.clicked) {
    isCloseOrOpen = 'open';

    if(props.opened) {
      isWinOrNot = 'win';
    }
  }

  return (
    <div className={`cell ${isCloseOrOpen} ${isWinOrNot}`} onClick={props.onItemClick}></div>
  );
};

export default Item;
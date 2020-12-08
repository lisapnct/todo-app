import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = (props) => {
  const { items } = props;
  return (
    <ul className="items-list">
      {items.map((item) => (
        <Item key={item.id} item={item} handleComplete={props.handleComplete} />
      ))}
    </ul>
  );
};

export default ItemList;

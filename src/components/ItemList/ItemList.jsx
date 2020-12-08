import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = (props) => {
  const { items } = props;
  return (
    <ul className="items-list">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;

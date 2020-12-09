import React from "react";
import "./Item.css";

const Item = (props) => {
  const { item, tab } = props;
  return (
    <li className={item.isCompleted ? "completed" : null}>
      <input
        checked={item.isCompleted ? true : false}
        type="checkbox"
        onChange={() => props.handleComplete(item.id)}
        id={item.id}
      />
      <label htmlFor="">{item.label}</label>
      {item.isCompleted && tab === "completed" && <button>delete</button>}
    </li>
  );
};

export default Item;

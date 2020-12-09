import React from "react";
import './Item.css'

const Item = (props) => {
  
  return (
    <li className={props.item.isCompleted ? 'completed': null}>
      <input checked={props.item.isCompleted ? true: false} type="checkbox" onChange={() => props.handleComplete(props.item.id)} id={props.item.id} />
      <label htmlFor="">{props.item.label}</label>
    </li>
  );
};

export default Item;

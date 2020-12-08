import React from "react";

const Item = (props) => {
  return (
    <li>
      <input type="checkbox" id={props.item} />
      <label htmlFor="">{props.item}</label>
    </li>
  );
};

export default Item;

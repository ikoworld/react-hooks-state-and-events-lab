import React, { useState } from "react";

function Item({ name, category }) {
  const [incart, setIncart] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const addInCart = () => {
    setIncart(!incart);
    setButtonText(incart ? "Add in cart" : "Remove From Cart");
  };

  const clas = incart ? 'in-cart' : "";

  return (
    <li className={clas}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addInCart} className="add">
        {buttonText}
      </button>
    </li>
  );
}

export default Item;

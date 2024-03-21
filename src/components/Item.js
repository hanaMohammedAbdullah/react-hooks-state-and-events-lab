import React, { useState } from "react";

function Item({ name, category }) {
  const handleAddToCart = () => {
    setIsAdded(!isAdded);
  };
  const [isAdded, setIsAdded] = useState(false);
  const buttonText = isAdded ? "Remove from Cart" : "Add to Cart";
  return (
    <li className={isAdded ? "in-cart" : ""}>
      <span className=''>{name}</span>
      <span className='category'>{category}</span>
      <button onClick={handleAddToCart} className={isAdded ? "remove" : "add"}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;

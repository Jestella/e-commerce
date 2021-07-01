import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart_item">
    <img src={imageUrl} alt="item" />
    <div className="item_details">
      <span className="name">{name}</span>
      <span className="price">
        C${price} X {quantity}
      </span>
    </div>
  </div>
);

export default CartItem;
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout-page.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout_page">
    <div className="checkout_header">
      <div className="header_block">
        <span>Product</span>
      </div>
      <div className="header_block">
        <span>Description</span>
      </div>
      <div className="header_block">
        <span>Quantity</span>
      </div>
      <div className="header_block">
        <span>Price</span>
      </div>
      <div className="header_block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: C${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

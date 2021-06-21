import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout-page.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout_page">
    <h1 className="checkout_title">SHOPPING CART</h1>
    <div className="checkout_header">
      <div className="header_block">
        <span>Product</span>
      </div>
      <div className="header_block">
        <span></span>
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
    <div className="test_warning">
      * Test Card Info*
      <br />
      Mastercard 5555 5555 5555 4444 - Exp: 01/23 - CVV: 555
    </div>
    <StripeCheckoutButton className="stripe_button" price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

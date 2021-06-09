import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart_dropdown">
    <div className="cart_items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;

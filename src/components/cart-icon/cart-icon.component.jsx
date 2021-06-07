import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart_icon">
    <ShoppingIcon className="shopping_icon" />
    <span className="item_count">0</span>
  </div>
);

export default CartIcon;

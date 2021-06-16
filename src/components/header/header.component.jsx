import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo_container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <div className="option" onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
      <Link className="option" to="/login">
        SIGN IN
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signout()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          LOG IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

export default Header;

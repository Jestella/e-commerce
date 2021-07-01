import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo_container" to="/e-commerce/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <LogoutIcon className="logout_icon" />
        </div>
      ) : (
        <Link className="option" to="/e-commerce/login">
          <LoginIcon className="login_icon" />
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

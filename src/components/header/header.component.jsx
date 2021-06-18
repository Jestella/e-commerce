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
    <div className="logo_container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        ALL CATEGORY
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <LogoutIcon className="login_icon" />
        </div>
      ) : (
        <Link className="option" to="/login">
          <LoginIcon className="logout_icon" />
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

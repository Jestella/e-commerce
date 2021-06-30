import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Shop from "./pages/shop/shop.component";
import LoginPage from "./pages/login-page/login-page.component";
import Footer from "./components/footer/footer.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import { auth, createUserInfo } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

class App extends React.Component {
  // to sign out
  unsubscribeFromAuth = null;
  // to sotre & use user data in the app
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserInfo(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/e-commerce" component={Home} />
          <Route path="/e-commerce/shop" component={Shop} />
          <Route exact path="/e-commerce/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/e-commerce/login"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/e-commerce" />
              ) : (
                <LoginPage />
              )
            }
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

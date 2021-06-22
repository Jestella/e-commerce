import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
<<<<<<< HEAD
import { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
=======
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Shop from "./pages/shop/shop.component";
<<<<<<< HEAD
import LoginPage from "./pages/login-page/login-page.component";
import Footer from "./components/footer/footer.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import { auth, createUserInfo } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
=======
import Login from "./pages/login/login.component";
import Footer from "./components/footer/footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
<<<<<<< HEAD

=======
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
  // to sign out
  unsubscribeFromAuth = null;
  // to sotre & use user data in the app
  componentDidMount() {
<<<<<<< HEAD
    this.unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const userRef = createUserInfo(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
=======
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
<<<<<<< HEAD
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
=======
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
          <Route
            exact
            path="/login"
            render={() =>
<<<<<<< HEAD
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
=======
              this.props.currentUser ? <Redirect to="/" /> : <Login />
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
            }
          />
        </Switch>
        <Footer />
<<<<<<< HEAD
      </Fragment>
=======
      </div>
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
export default App;
>>>>>>> 1df7f66449e1db729edf53ce66a763e4a6c1bae6

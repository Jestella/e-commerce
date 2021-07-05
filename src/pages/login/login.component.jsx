import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

import "./login.styles.scss";

const LoginPage = () => (
  <div className="login_page">
    <SignIn />
    <vl className="separator"></vl>
    <SignUp />
  </div>
);

export default LoginPage;

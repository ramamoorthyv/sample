import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "./actions";
import Form from "./Components/Basic";

const Login = ({ loginRequest, loginState, loginEmail }) => {
  const handleSubmit = (values) => loginRequest(values);
  return (
    <Form
      onSubmit={handleSubmit}
      loginState={loginState}
      loginEmail={loginEmail}
    />
  );
};

const mapStateToProps = (state) => ({
  // loginState: _.get(state, "login.loginState", false),
  // loginEmail: _.get(state, "login.email", null),
});

export default connect(mapStateToProps, { ...actions })(Login);

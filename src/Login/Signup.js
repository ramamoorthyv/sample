import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "./actions";
import Form from "./Components/SignupForm";

const Signup = ({ signupRequest, signupState, loginEmail }) => {
  const handleSubmit = (values) => signupRequest(values);
  return (
    <Form
      onSubmit={handleSubmit}
      signupState={signupState}
      loginEmail={loginEmail}
    />
  );
};

const mapStateToProps = (state) => ({
  signupState: _.get(state, "login.signupState", false),
  loginEmail: _.get(state, "login.email", null),
});

export default connect(mapStateToProps, { ...actions })(Signup);

import React from "react";
import { connect } from "react-redux";
import _ from "lodash"
import * as actions from "./actions";
import Form from "./Components/SignupForm";

const Signup = ({ signupRequest, signupState }) => {
  const handleSubmit = (values) => signupRequest(values);
  return <Form onSubmit={handleSubmit} signupState={signupState} />;
};

const mapStateToProps = (state) => ({
  signupState: _.get(state, "login.signupState", false),
});

export default connect(mapStateToProps, { ...actions })(Signup);

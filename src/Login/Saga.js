import { all, call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { stopSubmit } from "redux-form";
import * as actions from "./actions";
import * as constants from "./constants";
import api from "./api";

export function* loginSaga({ user }) {
  const { response, errors } = yield call(api.login, { user });
  if (response) {
    yield put(actions.loginSuccess(response));
  } else {
    // yield put(stopSubmit("LoginForm", errors));
    yield put(actions.loginFailure(errors));
  }
}

export function* signupSaga({ user }) {
  const { response,errors } = yield call(api.signup, { user });
  console.log("the response");
  console.log(response)
  if (response) {
    yield put(actions.signupSuccess(response));
  } else {
    message.error(errors.data.message)
    //yield put(stopSubmit("SignupForm", errors));
    yield put(actions.signupFailure(errors));
  }
}

export default function* root() {
  yield all([yield takeLatest(constants.LOGIN_REQUEST, loginSaga)]);
  yield all([yield takeLatest(constants.SIGNUP_REQUEST, signupSaga)]);
}

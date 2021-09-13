import { all, call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import _ from "lodash";
import { push } from "connected-react-router";
import * as actions from "./actions";
import * as constants from "./constants";
import api from "./api";

export function* loginSaga({ user }) {
  const { response, errors } = yield call(api.login, { user });
  if (response) {
    yield put(actions.loginSuccess(response));
    yield put(actions.setLoginEmail(_.get(user, "email", null)));

    const idToken = _.get(response, "data.idToken", null);
    const fName = _.get(response, "data.fName", null);
    if (idToken) {
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("fName", fName);
      yield put(actions.setAuth(idToken, fName));
      yield put(push("/profile"));
    } else {
      yield put(push("/otp"));
    }
  } else {
    message.error(_.get(errors, "data.message", null));
    // yield put(stopSubmit("LoginForm", errors));
    yield put(actions.loginFailure(errors));
  }
}

export function* signupSaga({ user }) {
  const { response, errors } = yield call(api.signup, { user });
  if (response) {
    yield put(actions.signupSuccess(response));
    yield put(actions.setLoginEmail(_.get(user, "email", null)));
    yield put(push("/otp"));
  } else {
    message.error(_.get(errors, "data.message", null));
    //yield put(stopSubmit("SignupForm", errors));
    yield put(actions.signupFailure(errors));
  }
}

export default function* root() {
  yield all([yield takeLatest(constants.LOGIN_REQUEST, loginSaga)]);
  yield all([yield takeLatest(constants.SIGNUP_REQUEST, signupSaga)]);
}

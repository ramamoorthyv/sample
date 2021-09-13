import { all, fork } from "redux-saga/effects";
import { LoginSagas } from "./Login";
export default function* root() {
  yield all([fork(LoginSagas)]);
}

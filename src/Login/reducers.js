import { combineReducers } from "redux";
import createReducer from "../Utils/createReducer";
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SET_LOGIN_EMAIL,
  SET_AUTH,
  CLEAR_AUTH,
} from "./constants";

const initialState = false;

const signupState = createReducer(initialState)({
  [SIGNUP_REQUEST]: () => true,
  [SIGNUP_FAILURE]: () => false,
  [SIGNUP_SUCCESS]: () => false,
});
const loginState = createReducer(initialState)({
  [LOGIN_REQUEST]: () => true,
  [LOGIN_FAILURE]: () => false,
  [LOGIN_SUCCESS]: () => false,
});

const email = createReducer(null)({
  [SET_LOGIN_EMAIL]: (state, { email }) => email,
});

const initalAuth = {
  idToken: localStorage.getItem("idToken"),
  fName: localStorage.getItem("fName"),
};
const auth = createReducer(initalAuth)({
  [SET_AUTH]: (state, { idToken, fName }) => ({
    idToken,
    fName,
  }),
  [CLEAR_AUTH]: (state, action) => initalAuth,
});

export default combineReducers({
  signupState,
  loginState,
  email,
  auth,
});

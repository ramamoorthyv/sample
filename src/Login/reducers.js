import { combineReducers } from "redux";
import createReducer from "../Utils/createReducer";
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
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

export default combineReducers({
  signupState,
  loginState,
});

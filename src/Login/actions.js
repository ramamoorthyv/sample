import * as constants from "./constants";

export const loginRequest = (user) => ({
  type: constants.LOGIN_REQUEST,
  user,
});

export const loginSuccess = (response) => ({
  type: constants.LOGIN_SUCCESS,
  response,
});

export const loginFailure = (errors) => ({
  type: constants.LOGIN_FAILURE,
  errors,
});

export const signupRequest = (user) => ({
  type: constants.SIGNUP_REQUEST,
  user,
});

export const signupSuccess = (response) => ({
  type: constants.SIGNUP_SUCCESS,
  response,
});

export const signupFailure = (errors) => ({
  type: constants.SIGNUP_FAILURE,
  errors,
});

export const setLoginEmail = (email) => ({
  type: constants.SET_LOGIN_EMAIL,
  email,
});

export const clearLoginEmail = () => ({
  type: constants.SET_LOGIN_EMAIL,
});

export const setAuth = (idToken, fName) => ({
  type: constants.SET_AUTH,
  idToken,
  fName,
});

export const clearAuth = () => ({
  type: constants.CLEAR_AUTH,
});

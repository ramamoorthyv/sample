import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import { LoginReducer } from "./Login";

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    login: LoginReducer,
    form: formReducer,
  });
};

export default createRootReducer;

import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from "redux-form"
import createReducer from "../src/Utils/createReducer"
import { LOGIN_REQUEST } from "./constants"
// import { TaskReducer } from "./Task"

const initialState = {}

const login = createReducer(initialState)({
  [LOGIN_REQUEST]: () => true,
})

// const RootReducer = combineReducers({
//   login,
//   form: formReducer
// })

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    login,
    form: formReducer
  });
};

export default createRootReducer;

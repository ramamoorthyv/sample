import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { Login, Signup, Otp } from "./Login";
import { OnlyGuest, PrivateRoute, DefaultLayout } from "../src/Layouts";

import "./App.css";
import "antd/dist/antd.css";
import RootSaga from "./sagas";

import configureStore, { history } from "./store";

const App = () => {
  const store = configureStore();
  store.runSaga(RootSaga);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <OnlyGuest exact path="/" component={Login} />
        <OnlyGuest exact path="/login" component={Login} />
        <OnlyGuest exact path="/otp" component={Otp} />
        <OnlyGuest exact path="/signup" component={Signup} />
      </ConnectedRouter>
    </Provider>
  );
};

export default withRouter(App);

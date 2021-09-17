import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { Login, Signup, Otp } from "./Login";
import { Profile } from "./Profile";
import { OnlyGuest, PrivateRoute } from "../src/Layouts";

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
        <PrivateRoute exact path="/profile" component={Profile} />
      </ConnectedRouter>
    </Provider>
  );
};

export default withRouter(App);

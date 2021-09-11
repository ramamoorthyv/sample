import React from "react";
import { Redirect, Route } from "react-router-dom";
import isAuth from "../isAuth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;

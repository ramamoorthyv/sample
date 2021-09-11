import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Login, Signup } from "./Login";

import "./App.css";
import "antd/dist/antd.css";
import RootSaga from "./sagas";

import configureStore, { history } from "./store";

const App = (rootElem) => {
  const store = configureStore();
  store.runSaga(RootSaga);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

// import {
//     BrowserRouter,
//     Route,
//     Switch,
// } from "react-router-dom";
// import Login from "./Login"
// import Menu from "./Common/Menu"
// import './App.css';
// import 'antd/dist/antd.css';

// function App() {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/login">
//                     <Login />
//                 </Route>
//             </Switch>
//         </BrowserRouter>
//     );
// }
// export default App;

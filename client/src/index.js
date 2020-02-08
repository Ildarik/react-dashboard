import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import Admin from "./pages/Admin";
import Login from "./components/Login";
import Register from "./components/Register";

import store from "./store";

const Main = () => {
  const { isUserAuthenticated } = useSelector(state => state);

  const toggleAdminLogin = isUserAuthenticated ? <Admin /> : <Login />;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">{toggleAdminLogin}</Route>
        <Route path="/admin">{toggleAdminLogin}</Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

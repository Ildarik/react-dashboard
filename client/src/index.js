import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import Admin from "./pages/Admin";
import Login from "./components/Login";
import Register from "./components/Register";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import OnjunoApp from "./components/OnjunoApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OnjunoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();

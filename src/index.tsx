import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducers/index";

import AppRouter from "./AppRouter";

const container = document.getElementById("root")!;
const root = createRoot(container);
const store = createStore(reducers, applyMiddleware(ReduxThunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducers/index";

import AppRouter from "./pages/AppRouter";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import main sass file to apply global styles
import "./static/sass/style.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
const store = createStore(reducers, applyMiddleware(ReduxThunk));

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { RootActions } from "./actions/actionTypes";
import rootReducer from "./reducers";

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>)
);

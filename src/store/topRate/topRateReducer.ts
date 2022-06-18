import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { TopRatedActionType } from "./topRateAction";

export interface TopRatedState {
  movies?: Movie[];
}

const defaultState: TopRatedState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: TopRatedActionType
): TopRatedState {
  switch (action.type) {
    case ActionTypes.FETCH_TOP_RATED:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}

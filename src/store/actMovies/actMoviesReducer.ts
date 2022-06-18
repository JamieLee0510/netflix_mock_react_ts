import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { ActMoviesActionType } from "./actMoviesAction";

export interface ActMoviesState {
  movies?: Movie[];
}

const defaultState: ActMoviesState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: ActMoviesActionType
): ActMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_ACTION_MOVIES:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}

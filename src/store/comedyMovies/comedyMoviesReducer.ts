import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { ComedyMoviesActionType } from "./comedyMoviesAction";

export interface ComedyMoviesState {
  movies?: Movie[];
}

const defaultState: ComedyMoviesState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: ComedyMoviesActionType
): ComedyMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_COMEDY_MOVIES:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}

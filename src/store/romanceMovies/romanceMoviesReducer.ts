import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { RomanceMoviesActionType } from "./romanceMoviesAction";

export interface RomanceMoviesState {
  movies?: Movie[];
}

const defaultState: RomanceMoviesState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: RomanceMoviesActionType
): RomanceMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_ROMANCE_MOVIES:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}

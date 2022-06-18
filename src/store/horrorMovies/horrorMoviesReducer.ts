import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { HorrorMoviesActionType } from "./horrorMoviesAction";

export interface HorrorMoviesState {
  movies?: Movie[];
}

const defaultState: HorrorMoviesState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: HorrorMoviesActionType
): HorrorMoviesState {
  switch (action.type) {
    case ActionTypes.FETCH_HORROR_MOVIES:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}

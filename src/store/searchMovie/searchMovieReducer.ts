import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { SearchMovieActionType } from "./searchMovieAction";

export interface SearchMovieState {
  isLoading: boolean;
  searchResults: Movie[];
}

const defaultState: SearchMovieState = {
  isLoading: false,
  searchResults: [],
};

export default function (
  state = defaultState,
  action: SearchMovieActionType
): SearchMovieState {
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH_MOVIE:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_SEARCH_MOVIE_FAIL:
      return { ...state, isLoading: false };
    case ActionTypes.FETCH_SEARCH_MOVIE_SUCCESS:
      const searchResults = action.payload.data.results;
      return { ...state, searchResults, isLoading: false };
    default:
      return state;
  }
}

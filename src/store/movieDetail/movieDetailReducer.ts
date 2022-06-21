import { Movie, MovieDetail } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { MovieDetailActionType } from "./movieDetailAction";

export interface MovieDetailState {
  isLoading: boolean;
  movieDetails: MovieDetail;
}

const defaultState: MovieDetailState = {
  isLoading: false,
  movieDetails: {} as MovieDetail,
};

export default function (
  state = defaultState,
  action: MovieDetailActionType
): MovieDetailState {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_DETAILS:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_MOVIE_DETAILS_FAIL:
      return { ...state, isLoading: false };
    case ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      console.log("movie reducer, action.payload.data:", action.payload.data);
      const movieDetails = action.payload.data;
      return { ...state, movieDetails, isLoading: false };
    default:
      return state;
  }
}

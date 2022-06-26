import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse, SearchResponse } from "../actions/types";
import { langChecker } from "../../utils/helper";

export type SearchMovieActionType =
  | SearchMovieAction
  | SearchMovieSuccess
  | SearchMovieFail;

type SearchMovieAction = {
  type: ActionTypes.FETCH_SEARCH_MOVIE;
};

type SearchMovieSuccess = AxiosAction<
  typeof ActionTypes.FETCH_SEARCH_MOVIE_SUCCESS,
  SearchResponse
>;

type SearchMovieFail = {
  type: ActionTypes.FETCH_SEARCH_MOVIE_FAIL;
};

export const fetchSearchMovie = (
  searchTerm: string
): ThunkAction<void, RootState, unknown, SearchMovieActionType> => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.FETCH_SEARCH_MOVIE });
      const response = await request.get(
        `/search/multi?api_key=${
          process.env.API_KEY
        }&language=${langChecker()}&include_adult=false&query=${searchTerm}`
      );
      dispatch({
        type: ActionTypes.FETCH_SEARCH_MOVIE_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_SEARCH_MOVIE_FAIL });
      console.log("error", error);
    }
  };
};

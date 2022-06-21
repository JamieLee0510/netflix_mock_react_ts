import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieDetailResponse } from "../actions/types";

export type MovieDetailActionType =
  | MovieDetailFetching
  | MovieDetailFetchingSuccess
  | MovieDetailFetchingFail;

type MovieDetailFetching = {
  type: ActionTypes.FETCH_MOVIE_DETAILS;
};

type MovieDetailFetchingSuccess = AxiosAction<
  typeof ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
  MovieDetailResponse
>;
type MovieDetailFetchingFail = {
  type: ActionTypes.FETCH_MOVIE_DETAILS_FAIL;
};

const media_type = {
  tv: "tv",
  movie: "movie",
};

export const fetchMovieDetails = (
  mediaType: string,
  mediaId: string
): ThunkAction<void, RootState, unknown, MovieDetailActionType> => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.FETCH_MOVIE_DETAILS });
      let urlPath;
      if (mediaType === media_type.movie) {
        urlPath = `/movie/${mediaId}?api_key=${process.env.API_KEY}`;
      } else {
        urlPath = `/tv/${mediaId}?api_key=${process.env.API_KEY}`;
      }

      const response = await request.get(urlPath);
      console.log("movie detail:", response);
      return dispatch({
        type: ActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      console.log("error", error);
      return dispatch({ type: ActionTypes.FETCH_MOVIE_DETAILS_FAIL });
    }
  };
};

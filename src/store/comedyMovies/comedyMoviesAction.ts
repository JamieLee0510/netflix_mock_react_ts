import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse } from "../actions/types";

export type ComedyMoviesActionType = AxiosAction<
  typeof ActionTypes.FETCH_COMEDY_MOVIES,
  MovieResponse
>;

export const fetchComedyMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  ComedyMoviesActionType
> => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
      );
      return dispatch({
        type: ActionTypes.FETCH_COMEDY_MOVIES,
        payload: response,
      });
    } catch (error) {}
  };
};

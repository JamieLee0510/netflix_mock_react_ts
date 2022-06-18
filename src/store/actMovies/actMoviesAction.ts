import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse } from "../actions/types";

export type ActMoviesActionType = AxiosAction<
  typeof ActionTypes.FETCH_ACTION_MOVIES,
  MovieResponse
>;

export const fetchActionMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  ActMoviesActionType
> => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
      );
      return dispatch({
        type: ActionTypes.FETCH_ACTION_MOVIES,
        payload: response,
      });
    } catch (error) {}
  };
};

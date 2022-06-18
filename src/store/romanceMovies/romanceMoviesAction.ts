import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse } from "../actions/types";

export type RomanceMoviesActionType = AxiosAction<
  typeof ActionTypes.FETCH_ROMANCE_MOVIES,
  MovieResponse
>;

export const fetchRomanceMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  RomanceMoviesActionType
> => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`
      );
      return dispatch({
        type: ActionTypes.FETCH_ROMANCE_MOVIES,
        payload: response,
      });
    } catch (error) {}
  };
};

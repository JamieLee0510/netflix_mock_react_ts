import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse } from "../actions/types";
import { langChecker } from "../../utils/helper";

export type HorrorMoviesActionType = AxiosAction<
  typeof ActionTypes.FETCH_HORROR_MOVIES,
  MovieResponse
>;

export const fetchHorrorMovies = (): ThunkAction<
  void,
  RootState,
  unknown,
  HorrorMoviesActionType
> => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/discover/movie?api_key=${
          process.env.API_KEY
        }&with_genres=27&language=${langChecker()}`
      );
      return dispatch({
        type: ActionTypes.FETCH_HORROR_MOVIES,
        payload: response,
      });
    } catch (error) {}
  };
};

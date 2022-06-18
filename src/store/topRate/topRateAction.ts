import { Dispatch } from "react";
import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse } from "../actions/types";

export type TopRatedActionType = AxiosAction<
  typeof ActionTypes.FETCH_TOP_RATED,
  MovieResponse
>;

export const fetchTopRated = (): ThunkAction<
  void,
  RootState,
  unknown,
  TopRatedActionType
> => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`
      );
      return dispatch({ type: ActionTypes.FETCH_TOP_RATED, payload: response });
    } catch (error) {}
  };
};

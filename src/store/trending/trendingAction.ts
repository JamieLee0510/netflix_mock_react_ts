import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootStore";
import { ActionTypes } from "../actions/actionTypes";
import { AxiosAction, MovieResponse } from "../actions/types";
import { langChecker } from "../../utils/helper";

export type TrendingActionType = AxiosAction<
  typeof ActionTypes.FETCH_TRENDING,
  MovieResponse
>;

export function fetchTrending(): ThunkAction<
  void,
  RootState,
  unknown,
  TrendingActionType
> {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/trending/all/week?api_key=${
          process.env.API_KEY
        }&language=${langChecker()}`
      );
      return dispatch({
        type: ActionTypes.FETCH_TRENDING,
        payload: response,
      });
    } catch (error) {}
  };
}

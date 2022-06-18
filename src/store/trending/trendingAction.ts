import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootStore";
import { ActionTypes, TrendingActionType } from "../actions/actionTypes";

export function fetchTrending(): ThunkAction<
  void,
  RootState,
  unknown,
  TrendingActionType
> {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
      );
      return dispatch({
        type: ActionTypes.FETCH_TRENDING,
        payload: response,
      });
    } catch (error) {}
  };
}

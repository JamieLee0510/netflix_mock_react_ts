import request from "../../utils/request";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../actions/actionTypes";
import { RootState } from "../rootStore";
import { AxiosAction, MovieResponse } from "../actions/types";

export type DocumentaryActionType = AxiosAction<
  typeof ActionTypes.FETCH_DOCUMENTARIES,
  MovieResponse
>;

export const fetchDocumentaries = (): ThunkAction<
  void,
  RootState,
  unknown,
  DocumentaryActionType
> => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
      );
      return dispatch({
        type: ActionTypes.FETCH_DOCUMENTARIES,
        payload: response,
      });
    } catch (error) {}
  };
};

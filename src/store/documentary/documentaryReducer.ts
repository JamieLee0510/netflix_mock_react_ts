import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { DocumentaryActionType } from "./documentaryAction";

export interface DocumentaryState {
  movies?: Movie[];
}

const defaultState: DocumentaryState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: DocumentaryActionType
): DocumentaryState {
  switch (action.type) {
    case ActionTypes.FETCH_DOCUMENTARIES:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}

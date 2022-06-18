import { Movie } from "../../model/movie";
import {
  ActionTypes,
  RootActions,
  TrendingActionType,
} from "../actions/actionTypes";

// export interface IFetchTrending {
//   type: ActionTypes.FETCH_TRENDING;
//   payload: any; //res data
// }

export interface TrendingState {
  trending?: Movie[];
}

const defaultState: TrendingState = {
  trending: [],
};

export default function (
  state = defaultState,
  action: TrendingActionType
): TrendingState {
  switch (action.type) {
    case ActionTypes.FETCH_TRENDING:
      const trending = action.payload.data.results;
      return { ...state, trending };
    default:
      return state;
  }
}

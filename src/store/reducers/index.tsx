import { combineReducers } from "redux";
import topRateReducer from "../topRate/topRateReducer";
import TrendingReducer from "../trending/trendingReducer";

const rootReducer = combineReducers({
  trending: TrendingReducer,
  topRated: topRateReducer,
});

export default rootReducer;

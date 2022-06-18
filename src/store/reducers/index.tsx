import { combineReducers } from "redux";
import TrendingReducer from "../trending/trendingReducer";

const rootReducer = combineReducers({ trending: TrendingReducer });

export default rootReducer;

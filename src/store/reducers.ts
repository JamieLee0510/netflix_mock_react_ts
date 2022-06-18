import { combineReducers } from "redux";
import actMoviesReducer from "./actMovies/actMoviesReducer";
import comedyMoviesReducer from "./comedyMovies/comedyMoviesReducer";
import topRateReducer from "./topRate/topRateReducer";
import TrendingReducer from "./trending/trendingReducer";

const rootReducer = combineReducers({
  trending: TrendingReducer,
  topRated: topRateReducer,
  actionMovies: actMoviesReducer,
  comedyMovies: comedyMoviesReducer,
});

export default rootReducer;

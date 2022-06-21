import { combineReducers } from "redux";
import actMoviesReducer from "./actMovies/actMoviesReducer";
import comedyMoviesReducer from "./comedyMovies/comedyMoviesReducer";
import documentaryReducer from "./documentary/documentaryReducer";
import horrorMoviesReducer from "./horrorMovies/horrorMoviesReducer";
import movieDetailReducer from "./movieDetail/movieDetailReducer";
import romanceMoviesReducer from "./romanceMovies/romanceMoviesReducer";
import topRateReducer from "./topRate/topRateReducer";
import TrendingReducer from "./trending/trendingReducer";

const rootReducer = combineReducers({
  trending: TrendingReducer,
  topRated: topRateReducer,
  actionMovies: actMoviesReducer,
  comedyMovies: comedyMoviesReducer,
  horrorMovies: horrorMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  documentaries: documentaryReducer,
  movieDetail: movieDetailReducer,
});

export default rootReducer;

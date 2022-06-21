import { ActMoviesActionType } from "../actMovies/actMoviesAction";
import { ComedyMoviesActionType } from "../comedyMovies/comedyMoviesAction";
import { DocumentaryActionType } from "../documentary/documentaryAction";
import { HorrorMoviesActionType } from "../horrorMovies/horrorMoviesAction";
import { MovieDetailActionType } from "../movieDetail/movieDetailAction";
import { RomanceMoviesActionType } from "../romanceMovies/romanceMoviesAction";
import { TopRatedActionType } from "../topRate/topRateAction";
import { TrendingActionType } from "../trending/trendingAction";

export enum ActionTypes {
  FETCH_TRENDING,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_TOP_RATED,
  FETCH_ACTION_MOVIES,
  FETCH_COMEDY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANCE_MOVIES,
  FETCH_DOCUMENTARIES,
  //movie detail
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAIL,
  //search
  FETCH_SEARCH_MOVIE,
  FETCH_SEARCH_MOVIE_FAIL,
  FETCH_SEARCH_MOVIE_SUCCESS,
}

export type RootActions =
  | TrendingActionType
  | TopRatedActionType
  | ActMoviesActionType
  | ComedyMoviesActionType
  | HorrorMoviesActionType
  | RomanceMoviesActionType
  | DocumentaryActionType
  | MovieDetailActionType;

import axios from "axios";
import { type } from "os";
import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootStore";
import { AsyncAxiosAction, AxiosAction, MovieResponse } from "./types";

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

export type RootActions = TrendingActionType;

export type TrendingActionType = AxiosAction<
  typeof ActionTypes.FETCH_TRENDING,
  MovieResponse
>;

const media_type = {
  tv: "tv",
  movie: "movie",
};

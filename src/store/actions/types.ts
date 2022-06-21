import { AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { Movie, MovieDetail } from "../../model/movie";

export interface AxiosAction<T, D> extends AnyAction {
  type: T;
  payload: AxiosResponse<D>;
}
export interface AsyncAxiosAction<T, D> extends AnyAction {
  type: T;
  payload: Promise<AxiosResponse<D>>;
}

export interface MovieResponse {
  results: Movie[];
}

export interface MovieDetailResponse extends MovieDetail {}

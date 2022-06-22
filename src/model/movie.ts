export interface Movie {
  poster_path: string;
  backdrop_path: string;
  title: string;
  id: string;
  media_type: string;
}

export interface MovieDetail {
  title?: string;
  name?: string;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  runtime?: string;
  episode_run_time?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  overview: string;
  backdrop_path?: string;
  poster_path?: string;
}

import { fetchActionMovies } from "../actMovies/actMoviesAction";
import { fetchComedyMovies } from "../comedyMovies/comedyMoviesAction";
import { fetchTopRated } from "../topRate/topRateAction";
import { fetchTrending } from "../trending/trendingAction";

export const movieActions = {
  fetchTrending: fetchTrending,
  fetchTopRated: fetchTopRated,
  fetchActionMovies: fetchActionMovies,
  fetchComedyMovies: fetchComedyMovies,
};

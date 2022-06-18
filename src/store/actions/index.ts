import { fetchActionMovies } from "../actMovies/actMoviesAction";
import { fetchComedyMovies } from "../comedyMovies/comedyMoviesAction";
import { fetchHorrorMovies } from "../horrorMovies/horrorMoviesAction";
import { fetchRomanceMovies } from "../romanceMovies/romanceMoviesAction";
import { fetchTopRated } from "../topRate/topRateAction";
import { fetchTrending } from "../trending/trendingAction";

export const movieActions = {
  fetchTrending: fetchTrending,
  fetchTopRated: fetchTopRated,
  fetchActionMovies: fetchActionMovies,
  fetchComedyMovies: fetchComedyMovies,
  fetchHorrorMovies: fetchHorrorMovies,
  fetchRomanceMovies: fetchRomanceMovies,
};

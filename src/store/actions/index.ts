import { fetchTopRated } from "../topRate/topRateAction";
import { fetchTrending } from "../trending/trendingAction";

export const movieActions = {
  fetchTrending: fetchTrending,
  fetchTopRated: fetchTopRated,
};

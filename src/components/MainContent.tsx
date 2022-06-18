import React, { useEffect } from "react";
import Header from "./basic/Header";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/actions";
import { IMovie } from "../utils/const";
import { RootState } from "../store/rootStore";
import { TrendingState } from "../store/trending/trendingReducer";
import DisplayMovieRow from "./DisplayMovieRow";
import { TopRatedState } from "../store/topRate/topRateReducer";

type Props = {
  selectMovieHandler: Function;
};

export default function MainContent({ selectMovieHandler }: Props) {
  const { movieDetails } = {
    movieDetails: { name: "hihi", overview: "hgihi" } as IMovie,
  };
  const trending = useSelector<RootState, TrendingState>(
    (state) => state.trending
  );
  const topRated = useSelector<RootState, TopRatedState>(
    (state) => state.topRated
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieActions.fetchTrending());
    dispatch(movieActions.fetchTopRated());
  }, [dispatch]);
  function test() {
    console.log("trending:", trending);
  }
  return (
    <div className="container">
      <Header />
      <div className="movieShowcase">
        <DisplayMovieRow
          title="Trending"
          selectMovieHandler={selectMovieHandler}
          movies={trending.movies}
        />
        <DisplayMovieRow
          title="Top Rated"
          selectMovieHandler={selectMovieHandler}
          movies={topRated.movies}
        />
      </div>
    </div>
  );
}

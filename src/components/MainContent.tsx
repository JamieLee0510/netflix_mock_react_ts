import React, { useEffect } from "react";
import Header from "./basic/Header";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/actions";
import { RootState } from "../store/rootStore";
import { TrendingState } from "../store/trending/trendingReducer";
import DisplayMovieRow from "./DisplayMovieRow";
import { TopRatedState } from "../store/topRate/topRateReducer";
import { ActMoviesState } from "../store/actMovies/actMoviesReducer";
import { ComedyMoviesState } from "../store/comedyMovies/comedyMoviesReducer";
import { HorrorMoviesState } from "../store/horrorMovies/horrorMoviesReducer";
import { RomanceMoviesState } from "../store/romanceMovies/romanceMoviesReducer";

type Props = {
  selectMovieHandler: Function;
};

export default function MainContent({ selectMovieHandler }: Props) {
  // const { movieDetails } = {
  //   movieDetails: { name: "hihi", overview: "hgihi" } as IMovie,
  // };
  const trending = useSelector<RootState, TrendingState>(
    (state) => state.trending
  );
  const topRated = useSelector<RootState, TopRatedState>(
    (state) => state.topRated
  );

  const actMovies = useSelector<RootState, ActMoviesState>(
    (state) => state.actionMovies
  );

  const comedyMovies = useSelector<RootState, ComedyMoviesState>(
    (state) => state.comedyMovies
  );
  const horrorMovies = useSelector<RootState, HorrorMoviesState>(
    (state) => state.horrorMovies
  );
  const romanceMovies = useSelector<RootState, RomanceMoviesState>(
    (state) => state.romanceMovies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieActions.fetchTrending());
    dispatch(movieActions.fetchTopRated());
    dispatch(movieActions.fetchActionMovies());
    dispatch(movieActions.fetchComedyMovies());
    dispatch(movieActions.fetchHorrorMovies());
    dispatch(movieActions.fetchRomanceMovies());
  }, [dispatch]);

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
        <DisplayMovieRow
          title="Action Movies"
          selectMovieHandler={selectMovieHandler}
          movies={actMovies.movies}
        />
        <DisplayMovieRow
          title="Comedy"
          selectMovieHandler={selectMovieHandler}
          movies={comedyMovies.movies}
        />
        <DisplayMovieRow
          title="Horror Movies"
          selectMovieHandler={selectMovieHandler}
          movies={horrorMovies.movies}
        />
        <DisplayMovieRow
          title="Romance"
          selectMovieHandler={selectMovieHandler}
          movies={romanceMovies.movies}
        />
      </div>
    </div>
  );
}

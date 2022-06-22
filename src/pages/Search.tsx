import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BasicModel from "../components/BasicModel";
import ModalMovieDetail from "../components/ModalMovieDetail";
import { useDebounce } from "../hooks/useDebounce";
import { Movie, MovieDetail } from "../model/movie";
import { movieActions } from "../store/actions";
import { MovieDetailState } from "../store/movieDetail/movieDetailReducer";
import { RootState } from "../store/rootStore";
import { SearchMovieState } from "../store/searchMovie/searchMovieReducer";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

type Props = {};

export default function Search({}: Props) {
  let query = useQuery();
  const debouncedSearchTerm = useDebounce(query.get("q"), 500);
  const [isToggleModal, setIsToggleModal] = useState(false);
  const { searchResults, isLoading } = useSelector<RootState, SearchMovieState>(
    (state) => state.searchMovieResult
  );
  const { movieDetails } = useSelector<RootState, MovieDetailState>(
    (state) => state.movieDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(movieActions.fetchSearchMovie(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);

  const onCloseModalHandler = () => {
    setIsToggleModal(false);
  };

  const onSelectMovieHandler = (movie: Movie) => {
    dispatch(movieActions.fetchMovieDetails(movie.media_type, movie.id));
    setIsToggleModal(true);
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <>
        <div className="search-container">
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className="movie">
                  <div
                    onClick={() => onSelectMovieHandler(movie)}
                    className="movie__column-poster"
                  >
                    <img src={movieImageUrl} alt="" className="movie__poster" />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <BasicModel
          show={isToggleModal}
          modalClosed={onCloseModalHandler}
          backgroundImage={
            movieDetails.backdrop_path || movieDetails.poster_path
          }
        >
          <ModalMovieDetail movie={movieDetails} />
        </BasicModel>
      </>
    ) : (
      <div className="no-results">
        <div className="no-results__text">
          <p>
            Your search for "{debouncedSearchTerm}" did not have any matches.
          </p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Try using a movie, TV show title, an actor or director</li>
            <li>Try a genre, like comedy, romance, sports, or drama</li>
          </ul>
        </div>
      </div>
    );
  };

  return !isLoading ? renderSearchResults() : <h1>Loading...</h1>;
}

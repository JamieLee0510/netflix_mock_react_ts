import React, { useState } from "react";
import MainContent from "../components/MainContent";
import { Movie } from "../model/movie";

type Props = {};

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const selectMovieHandler = async (movie: Movie) => {
    setToggleModal(true);
    setMovieDetails(movie);
  };

  const closeModal = () => {
    setToggleModal(false);
  };
  return (
    <div className="main-content">
      {/* <MainContent selectMovieHandler={selectMovieHandler} /> */}
      <MainContent selectMovieHandler={selectMovieHandler} />
    </div>
  );
};

export default Home;

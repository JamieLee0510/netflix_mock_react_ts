import React, { useState } from "react";
import MainContent from "../components/MainContent";
import { Movie, MovieDetail } from "../model/movie";
import Modal from "../components/BasicModel";
import ModalMovieDetails from "../components/ModalMovieDetail";

type Props = {};

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({} as MovieDetail);

  const selectMovieHandler = async (movie: MovieDetail) => {
    setToggleModal(true);
    setMovieDetails(movie);
  };

  const closeModal = () => {
    setToggleModal(false);
  };
  return (
    <>
      <div className="main-content">
        <MainContent selectMovieHandler={selectMovieHandler} />
      </div>
      {(movieDetails.backdrop_path != null ||
        movieDetails.poster_path != null) && (
        <Modal
          show={toggleModal}
          modalClosed={closeModal}
          backgroundImage={
            movieDetails.backdrop_path || movieDetails.poster_path
          }
        >
          <ModalMovieDetails movie={movieDetails} />
        </Modal>
      )}
    </>
  );
};

export default Home;

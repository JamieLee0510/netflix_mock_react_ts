import React from "react";
import MainContent from "../components/MainContent";

type Props = {};

const Home: React.FC = () => {
  return (
    <div className="main-content">
      {/* <MainContent selectMovieHandler={selectMovieHandler} /> */}
      <MainContent />
    </div>
  );
};

export default Home;

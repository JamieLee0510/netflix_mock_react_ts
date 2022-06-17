import React from "react";
import MainContent from "../components/MainContent";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="main-content">
      {/* <MainContent selectMovieHandler={selectMovieHandler} /> */}
      <MainContent />
    </div>
  );
}

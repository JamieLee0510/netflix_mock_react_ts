import React from "react";
import Header from "./basic/Header";

type Props = {};

export default function MainContent({}: Props) {
  const { movieDetails } = {
    movieDetails: { name: "hihi", overview: "hgihi" },
  };
  return (
    <div className="container">
      {" "}
      <Header movie={movieDetails} />
      MainContent
    </div>
  );
}

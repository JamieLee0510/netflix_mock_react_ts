import React from "react";
import { MovieDetail } from "../model/movie";
import AddIcon from "../static/images/add.svg";
import PlayIcon from "../static/images/play-button.svg";

type Props = {
  movie: MovieDetail;
};

export default function ModalMovieDetail({
  movie: {
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
    runtime,
    episode_run_time,
    number_of_episodes,
    number_of_seasons,
    overview,
  },
}: Props) {
  return (
    <div className="modal__container">
      <h1 className="modal__title">{title || name}</h1>
      <p className="modal__info">
        <span className="modal__rating">Rating: {vote_average! * 10}% </span>
        Release date: {release_date || first_air_date} Runtime:{" "}
        {runtime || episode_run_time}m
      </p>
      <p className="modal__episode">
        {number_of_episodes ? " Episodes: " + number_of_episodes : ""}
        {number_of_seasons ? " Seasons: " + number_of_seasons : ""}
      </p>
      <p className="modal__overview">{overview}</p>
      <button className="modal__btn modal__btn--red">
        <div className="modal__btn--icon">
          <PlayIcon />
        </div>
        Play
      </button>
      <button className="modal__btn">
        <div className="modal__btn--icon ">
          <AddIcon />
        </div>
        My List
      </button>
    </div>
  );
}

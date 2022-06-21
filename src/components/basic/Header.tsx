import React, { useState } from "react";

import PlayLogo from "../../static/images/play-button.svg";
// import { ReactComponent as AddLogo } from "../../static/images/add.svg";
import AddLogo from "../../static/images/add.svg";
import MuteIcon from "../../static/images/mute.svg";
import UnmuteIcon from "../../static/images/unmute.svg";
import ReactPlayer from "react-player";
import { MovieDetail } from "../../model/movie";

interface Props extends MovieDetail {}

const Header: React.FC<Props> = ({ name, overview }: Props) => {
  const [isMuted, setIsMuted] = useState(true);
  // let name = "hihi name";
  // let overview = "hihi overview";
  return (
    <header className="header">
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        className="header__video"
        url="https://vimeo.com/384025132"
      />
      <h1 className="header__container-heading">{name}</h1>
      <button
        onClick={() => alert("not a movie!")}
        className="header__container-btnPlay"
      >
        <div className="header__container-btnMyList-play">
          <PlayLogo />
        </div>
        {/* <PlayLogo className="header__container-btnMyList-play" />  Play*/}
        Play
      </button>
      <button className="header__container-btnMyList">
        <div className="header__container-btnMyList-add">
          <AddLogo />
        </div>
        <div> My List</div>
        {/* <AddLogo className="header__container-btnMyList-add" />   My List*/}
      </button>

      {isMuted ? (
        <div
          onClick={() => setIsMuted(false)}
          className="header__container-btnVolume"
        >
          <MuteIcon />
        </div>
      ) : (
        // <MuteIcon
        //   onClick={() => setIsMuted(false)}
        //   className="header__container-btnVolume"
        // />
        <div
          onClick={() => setIsMuted(true)}
          className="header__container-btnVolume"
        >
          <UnmuteIcon />
        </div>
        // <UnmuteIcon
        //   onClick={() => setIsMuted(true)}
        //   className="header__container-btnVolume"
        // />
      )}
      <p className="header__container-overview">{overview}</p>
      <div className="header__container--fadeBottom"></div>
    </header>
  );
};

export default Header;

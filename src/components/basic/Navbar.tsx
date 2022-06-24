import React, { useState, useEffect, useRef, ReactHTML } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { withRouter } from 'react-router-dom'

// import { useScroll } from '../hooks/useScroll'
import SearchLogo from "../../static/images/search-icon.svg";
import NetflixLogo from "../../static/images/Netflix_Logo_RGB.png";
import BellLogo from "../../static/images/bell-logo.svg";
import DropdownArrow from "../../static/images/drop-down-arrow.svg";
import DropdownContent from "../DropdownContent";
import { useScroll } from "../../hooks/useScroll";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "../LanguageDropDown";

type Props = {};

const Navbar: React.FC = () => {
  const searchInput = React.useRef(null);
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
  const [scrollDimensions] = useScroll();
  const { scrollY } = scrollDimensions;
  const { t } = useTranslation();
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input:", event.target.value);
    setUserInput(event.target.value);
  };

  useEffect(() => {
    if (
      document.activeElement === searchInput.current &&
      userInput.length === 0
    ) {
      navigate("/browse");
    }
    if (userInput.length > 0) {
      navigate(`/search?q=${userInput}`);
    }
  }, [userInput, searchInput]);

  const onLogoClick = () => {
    setUserInput("");
  };

  return (
    <nav className={"navigation " + (scrollY > 50 ? "black" : "")}>
      <ul className="navigation__container">
        <NavLink to="/" onClick={() => onLogoClick()}>
          <img
            className="navigation__container--logo"
            src={NetflixLogo}
            alt=""
          />
        </NavLink>
        {/* <div className="navigation__container--downArrow-2">
          <DropdownArrow />
        </div> */}

        <div className="navigation__container-link pseudo-link">
          {t("header.home")}
        </div>
        <div className="navigation__container-link pseudo-link">
          {t("header.tvShows")}
        </div>
        <div className="navigation__container-link pseudo-link">
          {t("header.movies")}
        </div>
        <div className="navigation__container-link pseudo-link">
          {t("header.recentAdd")}
        </div>
        <div className="navigation__container-link pseudo-link">
          {t("header.myList")}
        </div>

        <div className="navigation__container--left">
          <div className="logo">
            <SearchLogo />
          </div>

          <input
            ref={searchInput}
            value={userInput}
            onChange={(event) => onChange(event)}
            className="navigation__container--left__input"
            type="text"
            placeholder="Title, genres, people"
          />
        </div>

        <div className="navigation__container-link pseudo-link">
          {" "}
          {t("header.kid")}
        </div>
        <div className="navigation__container-link pseudo-link">DVD</div>
        <div className="navigation__container--bellLogo">
          <BellLogo />
        </div>

        <DropdownContent />
        <div className="navigation__container--downArrow">
          <DropdownArrow />
        </div>
        <LanguageDropDown />
        <div className="navigation__container--downArrow-3">
          <DropdownArrow />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef, ReactHTML } from "react";
import { NavLink } from "react-router-dom";
// import { withRouter } from 'react-router-dom'

// import { useScroll } from '../hooks/useScroll'
import { ReactComponent as SearchLogo } from "../../static/images/search-icon.svg";
import NetflixLogo from "../../static/images/Netflix_Logo_RGB.png";
import { ReactComponent as BellLogo } from "../../static/images/bell-logo.svg";
import { ReactComponent as DropdownArrow } from "../../static/images/drop-down-arrow.svg";
import DropdownContent from "../DropdownContent";

type Props = {
  history?: any;
};

// const Navbar: React.FC = ({ history }: Props) => {
//   const searchInput = React.useRef(null);
//   const [userInput, setUserInput] = useState("");
//   //   const [scrollDimensions] = useScroll()
//   //   const { scrollY } = scrollDimensions

//   const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   useEffect(() => {
//     if (
//       document.activeElement === searchInput.current &&
//       userInput.length === 0
//     ) {
//       history.push("/browse");
//     }
//     if (userInput.length > 0) history.push(`/search?q=${userInput}`);
//   }, [userInput, searchInput]);

//   const onLogoClick = () => {
//     setUserInput("");
//   };

//   return (
//     <nav className={"navigation " + (scrollY > 50 ? "black" : "")}>
//       <ul className="navigation__container">
//         <NavLink to="/" onClick={() => onLogoClick()}>
//           <img
//             className="navigation__container--logo"
//             src={NetflixLogo}
//             alt=""
//           />
//         </NavLink>
//         <DropdownArrow className="navigation__container--downArrow-2"></DropdownArrow>
//         <div className="navigation__container-link pseudo-link">Home</div>
//         <div className="navigation__container-link pseudo-link">TV Shows</div>
//         <div className="navigation__container-link pseudo-link">Movies</div>
//         <div className="navigation__container-link pseudo-link">
//           Recently Added
//         </div>
//         <div className="navigation__container-link pseudo-link">My List</div>

//         <div className="navigation__container--left">
//           <SearchLogo className="logo" />
//           <input
//             ref={searchInput}
//             value={userInput}
//             onChange={(event) => onChange(event)}
//             className="navigation__container--left__input"
//             type="text"
//             placeholder="Title, genres, people"
//           />
//         </div>

//         <div className="navigation__container-link pseudo-link">KIDS</div>
//         <div className="navigation__container-link pseudo-link">DVD</div>
//         <BellLogo className="navigation__container--bellLogo" />

//         <DropdownContent />
//         <DropdownArrow className="navigation__container--downArrow" />
//       </ul>
//     </nav>
//   );
// };

const Navbar: React.FC = () => {
  return <div>Navbar</div>;
};

export default Navbar;

import React from "react";

import Backdrop from "./BasicBackdrop";

type Props = {
  show: boolean;
  modalClosed: Function;
  children: any;
  backgroundImage?: string;
};

export default function BasicMadel({
  show,
  modalClosed,
  children,
  backgroundImage,
}: Props) {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backgroundImage})`,
  };
  return (
    <div>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? "modal show" : "modal hide"}
      >
        {children}
      </div>
    </div>
  );
}

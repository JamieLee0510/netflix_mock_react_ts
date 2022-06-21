import React from "react";

type Props = {
  toggleBackdrop: Function;
  show: boolean;
};

export default function BasicBackdrop({ toggleBackdrop, show }: Props) {
  return show ? (
    <div onClick={() => toggleBackdrop()} className="backdrop"></div>
  ) : null;
}

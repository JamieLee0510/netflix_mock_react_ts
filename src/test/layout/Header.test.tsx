import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Header from "../../components/basic/Header";
import MuteIcon from "../../static/images/mute.svg";
import UnmuteIcon from "../../static/images/unmute.svg";
import ReactPlayer from "react-player";

const testProps = { name: "test movie name", overview: "test movie overview" };

test("render header text", () => {
  const { container } = render(
    <Header name={testProps.name} overview={testProps.overview} />
  );
  const title = container.getElementsByClassName("header__container-heading");
  const description = container.getElementsByClassName(
    "header__container-overview"
  );
  expect(title[0]).toHaveTextContent("test movie name");
  expect(description[0]).toHaveTextContent("test movie overview");
});

test("test mute button", () => {
  const { container } = render(
    <Header name={testProps.name} overview={testProps.overview} />
  );
  const buttonElement = container.getElementsByClassName(
    "header__container-btnVolume"
  )[0];
  const player = container.querySelector("header")?.firstChild;
  fireEvent.click(buttonElement);
  // expect(player).props("muted").toBe(true);
});

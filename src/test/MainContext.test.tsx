import { fireEvent, render as rtlRender, screen } from "@testing-library/react";
import MainContent from "../components/MainContent";
import { Provider } from "react-redux";
import { store } from "../index";
import { ReactNode } from "react";

const render = (components: any) =>
  rtlRender(<Provider store={store}>{components}</Provider>);

const testSelectMovieHandler = () => {};
describe("here is test suite", () => {
  test("render MainContent", () => {
    render(<MainContent selectMovieHandler={testSelectMovieHandler} />);
    expect(screen.getByText("Trending")).toBeInTheDocument();
  });
});

import React, { useEffect } from "react";
import Header from "./basic/Header";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../store/actions";
import { IMovie } from "../utils/const";
import { RootState } from "../store/rootStore";
import { TrendingState } from "../store/trending/trendingReducer";

type Props = {};

export default function MainContent({}: Props) {
  const { movieDetails } = {
    movieDetails: { name: "hihi", overview: "hgihi" } as IMovie,
  };
  const trending = useSelector<RootState, TrendingState>(
    (state) => state.trending
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieActions.fetchTrending());
  }, [dispatch]);
  function test() {
    console.log("trending:", trending);
  }
  return (
    <div className="container">
      <Header />
      MainContent
      <button onClick={test}>test</button>
    </div>
  );
}

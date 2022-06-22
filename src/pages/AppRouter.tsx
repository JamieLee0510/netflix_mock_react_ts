import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Home from "./Home";

const AppRouter = () => (
  <Router>
    {/* TODO: Nav, Route, Footer */}
    <Navbar />
    <Routes>
      {" "}
      <Route path="/" element={<Navigate to="/browse" />} />
      <Route path="/browse" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;

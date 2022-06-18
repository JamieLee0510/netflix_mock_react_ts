import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/basic/Footer";
import Navbar from "../components/basic/Navbar";
import Home from "./Home";

const AppRouter = () => (
  <Router>
    {/* TODO: Nav, Route, Footer */}
    <Navbar />
    <Routes>
      <Route path="/browse" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;

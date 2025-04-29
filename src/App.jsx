import React from "react";
import "./index.css";
import Topbar from "./components/shared/Topbar";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/home/Hero";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
    </>
  );
};

export default App;

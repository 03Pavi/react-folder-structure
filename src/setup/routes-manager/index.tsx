import About from "@/pages/about-us";
import Homepage from "@/pages/homepage";
import React from "react";
import { Routes, Route } from "react-router-dom";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RoutesManager;

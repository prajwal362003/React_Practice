import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../router_components/Home";
import About from "../router_components/About";
import Contact from "../router_components/Contact";
import NotFound from "../router_components/NotFound";

const React_Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default React_Router;

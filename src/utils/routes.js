import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/homePage";
import ListOs from "../pages/ListOs/listOS";
import Dashboard from "../pages/Dashboard/dashboard";
import AboutUs from "../pages/AboutUs/aboutus";
import Contact from "../pages/Contact/contact";

function PathRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listos" element={<ListOs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default PathRoutes;

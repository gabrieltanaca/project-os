import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/landing";
import ListOs from "../pages/ListOs/listOs";
import Dashboard from "../pages/Dashboard/dashboard";
import AboutUs from "../pages/AboutUs/aboutus";
import Contact from "../pages/Contact/contact";

function PathRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listos" element={<ListOs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PathRoutes;

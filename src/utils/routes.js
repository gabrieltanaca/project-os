import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/homePage";
import ListOs from "../pages/ListOs/listOS";
import Dashboard from "../pages/Dashboard/dashboard";
import AboutUs from "../pages/AboutUs/aboutus";
import Contact from "../pages/Contact/contact";
import Navbar from "../Components/Navbar/navbar";

function PathRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listos" element={<ListOs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PathRoutes;

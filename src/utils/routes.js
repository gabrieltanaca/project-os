import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/landing";
import OsListPage from "../pages/OsListPage/OsListPage";
import ListOs from "../pages/ListOs/listOS";

function PathRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/oslist" element={<OsListPage />} />
        <Route path="listos" element={<ListOs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PathRoutes;

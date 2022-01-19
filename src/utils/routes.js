import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing/landing";
import OsListPage from "../pages/OsListPage/OsListPage";

function PathRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/oslist" element={<OsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PathRoutes;

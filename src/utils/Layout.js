import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavContext } from "../contexts/NavContext";
import { LayoutNav } from "../styles/layoutNav";
import Navbar from "../Components/Navbar/Navbar";
import PathRoutes from "./routes";

function Layout() {
  const { activeSideBar } = useContext(NavContext);

  return (
    <BrowserRouter>
      <LayoutNav className={activeSideBar ? "active" : "desative"}>
        <Navbar />
        <PathRoutes />
      </LayoutNav>
    </BrowserRouter>
  );
}

export default Layout;

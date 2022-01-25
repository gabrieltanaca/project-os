import React, { useState } from "react";
import { FaBars, FaLastfmSquare } from "react-icons/fa";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

import { SideBarData } from "../../utils/SideBarData";
import { NavbarMenu, NavMenu, NavText } from "./styles";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavbarMenu>
          <button onClick={showSidebar} className="ml-8 text-2xr">
            <FaBars />
          </button>
        </NavbarMenu>
        <NavMenu className={sidebar && "active"}>
          <ul className="w-full">
            <li className="nav-toggle">
              <Link to={"/"} className="ml-8 text-[2.5rem]">
                <FaLastfmSquare />
              </Link>
              <button className="ml-28 text-[1.5rem]" onClick={showSidebar}>
                <HiOutlineChevronDoubleLeft />
              </button>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <NavText key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </Link>
                </NavText>
              );
            })}
          </ul>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

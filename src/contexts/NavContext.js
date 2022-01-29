import React, { createContext, useState } from "react";

export const NavContext = createContext(null);

const NavProvider = (props) => {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const showSidebar = () => setActiveSideBar(!activeSideBar);

  return (
    <NavContext.Provider value={{ activeSideBar, showSidebar }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavProvider;

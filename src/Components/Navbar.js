import React from "react";
import "../Styles/NavbarMenu.css";

const Navbar = () => {
  return (
    <div className="flex-disp">
      <button className="nav-menu">About</button>
      <button className="nav-menu">Portfolio</button>
      {/* <button className="nav-menu">Experience</button> */}
      <button className="nav-menu">Contact</button>
    </div>
  );
};

export default Navbar;

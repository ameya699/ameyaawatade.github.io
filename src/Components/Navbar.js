import React from "react";
import "../Styles/NavbarMenu.css";

const Navbar = () => {
  return (
    <div className="flex-disp">
      <a type="button" className="nav-menu" href="#about">
        About{" "}
      </a>
      <a type="button" className="nav-menu" href="#tech">
        Tech{" "}
      </a>
      {/* <button className="nav-menu">Experience</button> */}
      <a type="button" className="nav-menu" href="#contact">
        Contact{" "}
      </a>
    </div>
  );
};

export default Navbar;

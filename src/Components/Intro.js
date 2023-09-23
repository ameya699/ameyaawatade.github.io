import React from "react";
import "../Styles/Intro.css";
import introphoto from "../images/aboutme.png";
import { red } from "@mui/material/colors";
import BusinessTwoTone from "@mui/icons-material/BusinessTwoTone";

const Intro = () => {
  return (
    <div className="intro-template">
      <div style={{ display: "inline", margin: "0", float: "left" }}>
        <p className="intro-hello">Hello ,</p>
        <p className="intro-iam">I'm</p>
        <p className="intro-name">Ameya</p>
        <p className="intro-surname">Awatade</p>
        <p className="intro-details">
          Working at{" "}
          <a
            href="#"
            style={{ color: "red", textDecoration: "none" }}
            onClick={() => {
              window.open(
                "https://www.persistent.com/",
                "_blank",
                "noreferrer"
              );
            }}
          >
            Persistent Systems{" "}
          </a>
          as a Software Engineer
        </p>
        <a
          href="https://drive.google.com/u/0/uc?id=1E3aCP-m7RdANh8KV-zxUIBFz8bZvHrp2&export=download"
          download="Resume - Ameya Awatade"
        >
          <button className="intro-resume">Download Resume</button>
        </a>
      </div>

      <img className="intro-photo" src={introphoto} />
    </div>
  );
};

export default Intro;

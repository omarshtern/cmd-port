import React from "react";
import cdm from  "./assets/cdm.png";
import vs from "./assets/vs.jpg";
import google from "./assets/google.png";
import folderd from "./assets/folderd.jpg";
import windows from "./assets/windows.jpg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <img className='windows' src={windows} />
        <img src={folderd} />
        <img src={google} />
        <img src={vs} />
        <img src={cdm} />
      </div>
      <div className="hours"></div>
    </div>
  );
};

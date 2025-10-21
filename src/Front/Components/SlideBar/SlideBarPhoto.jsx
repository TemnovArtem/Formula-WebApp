import React from "react";
import "./SlideBarStyle.css";
import Lines from "../../assets/Lines.png";
import Pi from "../../assets/Pi.png";
import ShareIn from "../../assets/Share_In.png";

function SlideBarPhoto() {
  return (
    <div className="slideBarContainer">
      <button className="BarContainer">
        <img src={Lines} className="BarLine" />
      </button>

      <button className="PiContainer">
        <img src={Pi} className="PiClass" />
      </button>

      <button className="ShareContainer">
        <img src={ShareIn} className="ShareLine" />
      </button>
    </div>
  );
}

export default SlideBarPhoto;

import React from "react";
import "./SlideBarStyle.css";
import Lines from "../../assets/Lines.png";
import Pi from "../../assets/Pi.png";
import ShareIn from "../../assets/Share_In.png";
import { useNavigate } from "react-router-dom";

function SlideBarPhoto() {
  const navigate = useNavigate();

  const PiTest = () => {
    navigate("/test");
  };

  return (
    <>
      <button className="BarContainer">
        <img src={Lines} className="BarLine" />
      </button>

      <button className="PiContainer" onClick={PiTest}>
        <img src={Pi} className="PiClass" />
      </button>

      <button className="ShareContainer">
        <img src={ShareIn} className="ShareLine" />
      </button>
    </>
  );
}

export default SlideBarPhoto;

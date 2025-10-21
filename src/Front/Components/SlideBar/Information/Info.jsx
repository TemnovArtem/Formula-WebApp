import React from "react";
import "./InfoStyle.css";
import INFO from "../../../assets/INFO.png";

function Info() {
  return (
    <button className="AboveQuestion">
      <img src={INFO} className="BarLine" />
    </button>
  );
}

export default Info;

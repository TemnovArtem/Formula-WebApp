import React from "react";
import "./InfoStyle.css";
import INFO from "../../../assets/INFO.png";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const About = () => {
    navigate("/about");
  };
  return (
    <button className="AboveQuestion" onClick={About}>
      <img src={INFO} className="BarLine" />
    </button>
  );
}

export default Info;

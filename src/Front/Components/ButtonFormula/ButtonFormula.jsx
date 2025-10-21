import React from "react";
import "./ButtonStyle.css";

const ButtonFormula = ({ label }) => {
  return (
    <div className="buttonContainer">
      <button className="button" aria-label={label}>
        <span className="button-text">{label}</span>
      </button>
    </div>
  );
};

export default ButtonFormula;

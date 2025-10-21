import React from "react";
import "./StyleInput.css";

const StyledInput = ({ label }) => {
  return (
    <div className="inputContainer">
      <input className="inputField" placeholder={label} />
      <label className="inputLabel"></label>
    </div>
  );
};

export default StyledInput;

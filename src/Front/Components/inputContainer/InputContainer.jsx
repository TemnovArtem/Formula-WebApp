import React from "react";
import "./StyleInput.css";

const StyledInput = ({ label }) => {
  return (
    <div className="inputContainer">
      <input className="inputField" placeholder={label} />
    </div>
  );
};

export default StyledInput;

import React from "react";
import "./StylePageAnother.css";

const PageAnother = ({ Name }) => {
  return (
    <div className="PageAnotherContainer">
      <h2 className="TextAnother"> {Name}</h2>
    </div>
  );
};

export default PageAnother;

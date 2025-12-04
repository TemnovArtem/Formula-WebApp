import React from "react";
import "./QuestionStyle.css";
import QUESTION from "../../../assets/Question.png";

function Question() {
  return (
    <button className="RightCorner">
      <img src={QUESTION} className="BarLine" />
    </button>
  );
}

export default Question;

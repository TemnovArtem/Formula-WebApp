import React from "react";

import "./StyleTestPage.css";
import InputContainer from "../Components/inputContainer/InputContainer.jsx";
import BackButton from "../Components/ButtonBack/BackButton.jsx";

const TestPage = () => {
  return (
    <div className="testPage">
      <div className="titleText">
        <div>TEST</div>
        <div>YOUR</div>
        <div>SKILLS</div>
      </div>

      <div className="testCard">
        <div className="taskHeader">TASK #1</div>

        <div className="taskContent">{}</div>

        <div className="answerContainer">
          <InputContainer label="Answer" />

          <button className="verifyText">
            <img src="src/Front/assets/Confirm.png" />
          </button>
        </div>
      </div>
      <BackButton></BackButton>
    </div>
  );
};

export default TestPage;

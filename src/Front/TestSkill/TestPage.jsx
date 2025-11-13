import React, { useState } from "react";
import "./StyleTestPage.css";
import InputContainer from "../Components/inputContainer/InputContainer.jsx";
import BackButton from "../Components/ButtonBack/BackButton.jsx";
import { AnswerUser } from "./AnswerLogick.js";

const TestPage = () => {
  const questions = [
    "125 + 375",
    "900 - 457",
    "24 * 3",
    "84 / 7",
    "Знайдіть периметр прямокутника 8 и 5",
    "3x + 4 при x = 2",
    "25% від 100",
    "x - 7 = 15",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [form, setForm] = useState({ answer: "" });

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setForm({ answer: "" });
    } else {
      alert(" Тест завершено!");
    }
  };

  const handleFieldChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AnswerUser(form.answer, questions[currentIndex], nextQuestion);
  };

  return (
    <div className="testPage">
      <div className="titleText">
        <div>TEST</div>
        <div>YOUR</div>
        <div>SKILLS</div>
      </div>

      <div className="testCard">
        <div className="taskHeader">TASK #{currentIndex + 1}</div>

        <div className="taskContent">
          <pre aria-label="task-text" style={{ margin: 0 }}>
            {questions[currentIndex]}
          </pre>
        </div>

        <div className="answerContainer">
          <InputContainer
            label="Answer"
            name="answer"
            value={form.answer}
            onChange={handleFieldChange}
            type="text"
            placeholder="Type your answer here..."
          />

          <button
            className="verifyText"
            type="button"
            onClick={handleSubmit}
            aria-label="verify-answer"
          >
            <img src="src/Front/assets/Confirm.png" alt="confirm" />
          </button>
        </div>
      </div>

      <BackButton />
    </div>
  );
};

export default TestPage;

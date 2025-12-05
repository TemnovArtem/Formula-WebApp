import React from "react";
import "./StyleTestPage.css";
import InputContainer from "../Components/inputContainer/InputContainer.jsx";
import BackButton from "../Components/ButtonBack/BackButton.jsx";
import useTestPage from "../Hooks/useTestPage.jsx";
import useSessionEmail from "../Hooks/useSession.jsx";

const TestPage = () => {
  const { email } = useSessionEmail("userEmail");

  const {
    questions,
    currentIndex,
    form,
    count,
    isLoading,
    error,
    handleFieldChange,
    handleSubmit,
  } = useTestPage(email, "testPage");

  return (
    <div className="testPage">
      <div className="titleText">
        <div>TEST</div>
        <div>YOUR</div>
        <div>SKILLS</div>
      </div>

      <div className="testCard">
        <div className="taskHeader">
          TASK #{currentIndex + 1}
          <span style={{ marginLeft: "20px", fontSize: "0.8em" }}>
            Правильних відповідей: {count}
          </span>
        </div>

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
            disabled={isLoading}
          >
            <img src="src/Front/assets/Confirm.png" alt="confirm" />
          </button>
        </div>

        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>
            Помилка: {error}
          </div>
        )}
      </div>

      <BackButton />
    </div>
  );
};

export default TestPage;

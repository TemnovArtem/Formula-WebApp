import { useState } from "react";

const useTestPage = (userEmail, page) => {
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

  const answersMap = new Map([
    ["125 + 375", "500"],
    ["900 - 457", "443"],
    ["24 * 3", "72"],
    ["84 / 7", "12"],
    ["Знайдіть периметр прямокутника 8 и 5", "26"],
    ["3x + 4 при x = 2", "10"],
    ["25% від 100", "25"],
    ["x - 7 = 15", "22"],
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [form, setForm] = useState({ answer: "" });
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setForm({ answer: "" });
    } else {
      alert("✅ Тест завершено!");
      resetTest();
    }
  };

  const checkAnswer = (userAnswer, currentQuestion) => {
    const correctAnswer = answersMap.get(currentQuestion);

    if (!correctAnswer) {
      alert("Невідоме питання");
      return false;
    }

    if (userAnswer.trim() === correctAnswer) {
      alert("✅ Правильна відповідь!");
      return true;
    } else {
      alert("❌ Неправильно, спробуй ще!");
      return false;
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isCorrect = checkAnswer(form.answer, questions[currentIndex]);

    if (isCorrect) {
      nextQuestion();

      const newCount = count + 1;
      setCount(newCount);

      if (questions.length === currentIndex + 1) {
        await updateCount(newCount);
      }
    }
  };

  const updateCount = async (newCount) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:8080/${page}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          countOfTest: newCount,
        }),
      });

      if (!response.ok) {
        throw new Error(`Помилка при оновленні count: ${response.status}`);
      }

      const data = await response.json();
      console.log("Count оновлено успішно:", data);
    } catch (err) {
      console.error("Помилка:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetTest = () => {
    setCurrentIndex(0);
    setForm({ answer: "" });
    setError(null);
  };

  return {
    questions,
    currentIndex,
    form,
    count,
    isLoading,
    error,
    handleFieldChange,
    handleSubmit,
    updateCount,
    resetTest,
  };
};

export default useTestPage;

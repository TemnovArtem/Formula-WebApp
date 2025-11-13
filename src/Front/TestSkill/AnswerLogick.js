export async function AnswerUser(
  userAnswer,
  currentQuestion,
  nextQuestionCallback,
) {
  const userMap = new Map([
    ["125 + 375", "500"],
    ["900 - 457", "443"],
    ["24 * 3", "72"],
    ["84 / 7", "12"],
    ["Знайдіть периметр прямокутника 8 и 5", "26"],
    ["3x + 4 при x = 2", "10"],
    ["25% від 100", "25"],
    ["x - 7 = 15", "22"],
  ]);

  const correctAnswer = userMap.get(currentQuestion);

  if (!correctAnswer) {
    alert("Невідоме питання");
    return false;
  }

  if (userAnswer.trim() === correctAnswer) {
    alert(" Правильна відповідь!");
    nextQuestionCallback();
    return true;
  } else {
    alert(" Неправильно, спробуй ще!");
    return false;
  }
}

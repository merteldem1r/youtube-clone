export default function optionStyle(
  isGameOver,
  opt,
  userAnswer,
  correctAnswer
) {
  if (isGameOver) {
    if (correctAnswer == opt) return "option correct disabled";
    else if (userAnswer != correctAnswer && opt == userAnswer)
      return "option wrong disabled";
    else return "option disabled";
  } else {
    return userAnswer == opt ? "option selected" : "option";
  }
}

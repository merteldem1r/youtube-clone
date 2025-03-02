import React, { useEffect, useState } from 'react';
import ThemeButton from './UI/Theme Button/ThemeButton';
import '../css/Quiz.css';
import getCurrentDate from '../utils/getCurrentDate';
import CountDown from './CountDown';
import Question from './Question';

export default function Quiz({
  setIsDarkMode,
  quizSettings,
  quiz,
  setQuiz,
  fetchQuiz,
  resetQuiz,
  setError,
  setMyResults,
}) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [countdown, setCountdown] = useState(quizSettings.numOfQuestions * 15);
  const [correctCount, setCorrectCount] = useState(0);
  const [allUserAnswers, setAllUserAnswers] = useState(
    Array(quiz.length).fill(null)
  );

  // check countdown timer
  useEffect(() => {
    if (countdown <= 0) checkAnswers();
  }, [countdown]);

  // clear fetching error
  useEffect(() => setError(""), []);

  // set allUserAnswers state with the answers that coming from each Qustion
  function setAllUserAnswersFN(quesIndex, userAnswer) {
    setAllUserAnswers(prev => {
      prev[quesIndex] = userAnswer;
      return prev;
    });
  }

  // check answers
  function checkAnswers() {
    setIsGameOver(true);

    let correct = 0,
      wrong = 0;

    // compare allUserAnswers with correct answers to get total correct count
    allUserAnswers.forEach((answ, i) => {
      if (answ === atob(quiz[i].correct_answer)) correct++;
      if (answ && answ !== atob(quiz[i].correct_answer)) wrong++;
    });
    setCorrectCount(correct);

    // set results
    setMyResults(prev => {
      return {
        lastGames: [
          ...prev.lastGames,
          {
            date: getCurrentDate(),
            questions: quiz.length,
            correct: correct,
            wrong: wrong,
          },
        ],
        totalGames: prev.totalGames + 1,
        totalAnswers: prev.totalAnswers + (correct + wrong),
        totalCorrect: prev.totalCorrect + correct,
        totalWrong: prev.totalWrong + wrong,
      };
    });
  }

  // play again with the same game settings
  function playAgain() {
    setQuiz([]);
    // get quiz with the same settings
    fetchQuiz(Object.values(quizSettings));
  }

  return (
    <div className="quiz">
      {quizSettings.isTimerDisabled && (
        <>
          <br />
          <br />
        </>
      )}

      {!quizSettings.isTimerDisabled && (
        <CountDown
          countdown={countdown}
          setCountdown={setCountdown}
          isGameOver={isGameOver}
        />
      )}

      <div
        onClick={() => setIsDarkMode(prev => !prev)}
        className="theme-btn-container"
      >
        <ThemeButton />
      </div>
      <div className="questions-container">
        {quiz.map((ques, index) => {
          return (
            <Question
              key={index}
              quesIndex={index}
              question={atob(ques.question)}
              correctAnswer={atob(ques.correct_answer)}
              incorrectAnswers={ques.incorrect_answers.map(x => atob(x))}
              isGameOver={isGameOver}
              setAllUserAnswersFN={setAllUserAnswersFN}
            />
          );
        })}
      </div>

      <div className="quiz-footer">
        {isGameOver && (
          <div className="quiz-result">
            You scored {correctCount}/{quiz.length} correct answers
          </div>
        )}

        {isGameOver ? (
          <>
            <button onClick={playAgain} className="play-again">
              Play Again
            </button>
            <button onClick={resetQuiz} className="change-settings">
              change settings
            </button>
          </>
        ) : (
          <button onClick={checkAnswers} className="check-answers">
            Check Answers
          </button>
        )}
      </div>
    </div>
  );
}

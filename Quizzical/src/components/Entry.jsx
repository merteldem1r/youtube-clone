import React, { useMemo, useState } from "react";
import Loader from "./UI/Loader/Loader";
import Modal from "./UI/Modal/Modal";
import ThemeButton from "./UI/Theme Button/ThemeButton";
import QuizService from "../API/QuizService";
import "../css/Entry.css";
import Results from "./Results";
import Settings from "./Settings";

export default function Entry({
  setIsDarkMode,
  isLoading,
  isDarkMode,
  quizSettings,
  setQuizSettings,
  fetchQuiz,
  error,
  myResults,
  setMyResults,
}) {
  const [totalQuestions, setTotalQuestions] = useState();
  const [isModal, setIsModal] = useState(false);

  // get all questions count in database
  useMemo(async () => {
    const data = await QuizService.getQuestionsCountInDatabase();
    setTotalQuestions(data.overall.total_num_of_questions);
  }, [totalQuestions]);

  return (
    <section className="entry">
      <Modal visible={isModal} setVisible={setIsModal} isDarkMode={isDarkMode}>
        <Results myResults={myResults} setMyResults={setMyResults} />
      </Modal>
      <div
        onClick={() => setIsDarkMode(prev => !prev)}
        className="theme-btn-container"
      >
        <ThemeButton />
      </div>

      <div className="entry-inner">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h1 className="entry-title">Quizzical</h1>

            <p className="entry-description">
              Welcome to Quizzical React App! Answer the questions and try your
              best. Questions taken from the free Trivia database.
              <br />
              <span className="entry-total-questions">
                Total questions in database: <span>{totalQuestions}</span>
              </span>
            </p>

            <div className="entry-info">
              <Settings
                quizSettings={quizSettings}
                setQuizSettings={setQuizSettings}
              />
            </div>

            {error && <div className="error-container">{error}</div>}

            <div className="entry-footer">
              <button
                onClick={() => setIsModal(true)}
                className="my-results-btn"
              >
                My Results
              </button>

              <button
                onClick={() => {
                  fetchQuiz(Object.values(quizSettings));
                }}
                className="start-btn"
              >
                Start quiz
              </button>
            </div>
          </>
        )}
      </div>
      <div className="author-container">
        Developed by{" "}
        <a
          href="https://github.com/merteldem1r"
          target="_blank"
          className="author"
        >
          Mert Eldemir
        </a>
      </div>
    </section>
  );
}

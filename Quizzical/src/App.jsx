import { useEffect, useState } from 'react';
import QuizService from './API/QuizService';
import './App.css';
import Entry from './components/Entry';
import Quiz from './components/Quiz';
import { useFetching } from './hooks/useFetching';
import { useLocalStorage } from './hooks/useLocalStorage.js';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [quizSettings, setQuizSettings] = useState({
    numOfQuestions: "5",
    category: "",
    difficulty: "",
    type: "",
    isTimerDisabled: false,
  });
  const [fetchQuiz, isLoading, error, setError] = useFetching(
    async settings => {
      const data = await QuizService.getQuiz(settings);
      setQuiz(data.results);
    }
  );

  const INITIAL_RESULTS = {
    lastGames: [],
    totalGames: 0,
    totalAnswers: 0,
    totalCorrect: 0,
    totalWrong: 0,
  }
  const [myResults, setMyResults] = useLocalStorage("myResults", INITIAL_RESULTS);

  // save results to local storage
  useEffect(() => {
    setMyResults(myResults);
  }, [myResults]);

  // reset quiz and settings
  function resetQuiz() {
    setQuiz([]);
    setQuizSettings({
      numOfQuestions: "5",
      category: "",
      difficulty: "",
      type: "",
      isTimerDisabled: false,
    });
  }

  return (
    <main className={isDarkMode ? "darkmode" : ""}>
      {quiz.length > 0 ? (
        <div className="container">
          <Quiz
            setIsDarkMode={setIsDarkMode}
            quizSettings={quizSettings}
            quiz={quiz}
            setQuiz={setQuiz}
            fetchQuiz={fetchQuiz}
            resetQuiz={resetQuiz}
            setError={setError}
            setMyResults={setMyResults}
          />
        </div>
      ) : (
        <Entry
          setIsDarkMode={setIsDarkMode}
          quizSettings={quizSettings}
          isLoading={isLoading}
          isDarkMode={isDarkMode}
          setQuizSettings={setQuizSettings}
          fetchQuiz={fetchQuiz}
          resetQuiz={resetQuiz}
          error={error}
          myResults={myResults}
          setMyResults={setMyResults}
        />
      )}
    </main>
  );
}

export default App;

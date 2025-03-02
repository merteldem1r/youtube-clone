import React from "react";
import "../css/Results.css";

export default function Results({ myResults, setMyResults }) {
  return (
    <div className="results-container">
      <div className="last-games">
        <h1 className="last-games-title">Last Games</h1>
        <div className="games-container">
          {myResults.lastGames.length > 0 ? (
            myResults.lastGames.map((game, i) => {
              return (
                <div key={i} className="game">
                  <div className="game-date">{game.date}</div>
                  <div className="game-ques">Questions: {game.questions}</div>
                  <div className="game-correct">Correct: {game.correct}</div>
                  <div className="game-wrong">Wrong: {game.wrong}</div>
                </div>
              );
            })
          ) : (
            <div className="no-results-box">No results</div>
          )}
          {}
        </div>
      </div>
      <div className="total-results">
        <h1 className="total-results-title">Total Results</h1>
        <div className="total-results-container">
          <div className="total-games">Games: {myResults.totalGames}</div>
          <div className="total-games">Answers: {myResults.totalAnswers}</div>
          <div className="total-games">
            Correct Answers: {myResults.totalCorrect}
          </div>
          <div className="total-games">
            Wrong Answers: {myResults.totalWrong}
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          setMyResults({
            lastGames: [],
            totalGames: 0,
            totalAnswers: 0,
            totalCorrect: 0,
            totalWrong: 0,
          })
        }
        className="results-clear-btn"
      >
        Clear Results
      </button>
    </div>
  );
}

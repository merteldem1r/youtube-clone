import React, { useState } from "react";
import "../css/Settings.css";
import { quizCategories } from "../data/quizCategories";

export default function Settings({ quizSettings, setQuizSettings }) {
  const [isChecked, setIsChecked] = useState(quizSettings.isTimerDisabled);

  // onChange setting to the settings object
  function setSettingFN(e) {
    const { name, value, checked } = e.target;
    setQuizSettings(prev => ({
      ...prev,
      [name]: value,
      isTimerDisabled: typeof checked == "undefined" ? isChecked : checked,
    }));
  }

  return (
    <>
      <div className="settings-container">
        <div className="setting">
          <label htmlFor="numOfQuestions">
            Questions:{" "}
            <span className="questions-num">{quizSettings.numOfQuestions}</span>
          </label>
          <input
            value={quizSettings.numOfQuestions}
            onChange={e => setSettingFN(e)}
            step="1"
            min="3"
            max="20"
            name="numOfQuestions"
            type="range"
          />
        </div>

        <div className="setting">
          <label htmlFor="category">Category:</label>
          <select
            value={quizSettings.category}
            onChange={e => setSettingFN(e)}
            name="category"
          >
            <option value="">Any Category</option>
            {quizCategories.map(cat => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="setting">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            value={quizSettings.difficulty}
            onChange={e => setSettingFN(e)}
            name="difficulty"
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="setting">
          <label htmlFor="type">Questions Type:</label>
          <select
            value={quizSettings.type}
            onChange={e => setSettingFN(e)}
            name="type"
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>

        <div className="setting">
          <label htmlFor="isTimerDisabled">Play without Quiz timer</label>
          <input
            checked={isChecked}
            onChange={e => {
              setIsChecked(!isChecked);
              setSettingFN(e);
            }}
            name="isTimerDisabled"
            type="checkbox"
            style={{ scale: "1.2", cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}

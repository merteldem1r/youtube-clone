import React, { useEffect, useMemo, useState } from "react";
import optionClass from "../utils/optionClass";
import shuffle from "../utils/shuffle";

export default function Question(props) {
  const [userAnswer, setUserAnswer] = useState(null);
  const [options, setOptions] = useState([
    props.correctAnswer,
    ...props.incorrectAnswers,
  ]);

  // set current user answer to all user answers state
  useEffect(() => {
    props.setAllUserAnswersFN(props.quesIndex, userAnswer);
  }, [userAnswer]);

  // shuffle the options array if it's not boolean question type
  useMemo(() => {
    if (options.length === 2) setOptions(['True', 'False']);
    else setOptions(shuffle(options));
  }, []);

  // choose option event
  function chooseOption(opt) {
    setUserAnswer(opt);
    if (opt == userAnswer) setUserAnswer(null);
  }

  return (
    <div className="question-box">
      <div className="question-title">
        <span className="question-number">{props.quesIndex + 1})</span>{" "}
        {props.question}
      </div>
      <div className="options-box">
        {/* render options */}
        {options.map(opt => {
          return (
            <div
              onClick={() => chooseOption(opt)}
              key={opt}
              className={optionClass(
                props.isGameOver,
                opt,
                userAnswer,
                props.correctAnswer,
              )}
            >
              <span>{opt}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

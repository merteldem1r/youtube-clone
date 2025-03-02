import React, { useEffect, useMemo, useRef } from "react";
import timerFormat from "../utils/timerFormat";

export default function CountDown({ countdown, setCountdown, isGameOver }) {
  const timerID = useRef();

  // stop timer if game is over
  useMemo(() => clearInterval(timerID.current), [isGameOver]);

  useEffect(() => {
    timerID.current = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerID.current);
  }, []);

  const style = {
    fontWeight: "700",
    marginBottom: "12px",
    alignSelf: "end",
    fontSize: "24px",
  };

  return (
    <div style={style}>
      {countdown === 0 ? "Time's up!" : timerFormat(countdown)}
    </div>
  );
}

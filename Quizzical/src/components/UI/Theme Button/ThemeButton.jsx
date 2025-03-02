import React from "react";
import "./ThemeButton.css";

export default function ThemeButton() {
  return (
    <div className="toggle">
      <p className="light-text">Light</p>
      <div className="toggle-button">
        <div className="toggle-circle"></div>
      </div>
      <p className="dark-text">Dark</p>
    </div>
  );
}

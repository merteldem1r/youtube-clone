import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, visible, setVisible, isDarkMode }) => {
  const rootClasses = [cl.modal];

  if (visible) rootClasses.push(cl.active);

  const style = isDarkMode ? { color: "#fff", backgroundColor: "#17181a" } : {};

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        style={style}
        className={cl.modalContent}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

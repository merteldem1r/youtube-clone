import React from "react";
import cl from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={cl.loader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

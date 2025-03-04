import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src="img/error.jpg" className="w-[70px] mix-blend-darken" alt="" />
      <h1 className="text-[20px] font-semibold">
        There was an unexpected error
      </h1>
      {Object.keys(error).map(key => {
        return (
          <div>
            <span className="font-medium">{key}: </span>
            <span>{error[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Error;

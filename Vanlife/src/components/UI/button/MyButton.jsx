import React from "react";

const MyButton = ({ children }) => {
  return (
    <button className="w-full p-3 rounded-sm text-white text-center bg-orange font-semibold text-sm md:text-md hover:underline hover:scale-[1.02] shadow-xl transition">
      {children}
    </button>
  );
};

export default MyButton;

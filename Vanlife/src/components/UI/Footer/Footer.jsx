import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto h-[9vh] flex items-center justify-center z-10 bg-main text-black shadow-footer text-[12px] md:text-[14px] lg:text-[16px]">
      <div className="">
        © Developed by{" "}
        <a
          target="_blank"
          className="hover:underline font-medium"
          href="https://github.com/merteldem1r"
        >
          {" "}
          Mert Eldemir
        </a>
      </div>
    </footer>
  );
};

export default Footer;

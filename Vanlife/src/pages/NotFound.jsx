import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="my-[30vh] flex flex-col items-center justify-center">
      <div className="max-w-[500px] p-5">
        <h1 className="text-[20px] md:text-[26px] font-bold">
          Sorry, the page you were looking for was not found.
        </h1>
        <Link
          to="/"
          className="mt-4 block text-center w-full bg-black text-white font-semibold p-3 rounded-sm hover:scale-[1.02] transition"
        >
          Return to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-5 bg-main fixed w-full z-50 shadow-md">
      <div className="container flex justify-between items-center">
        <div className="w-[100px] md:w-[135px]">
          <Link to="/">
            <img
              className="w-full hover:scale-[1.05] transition"
              src="/img/logo.png"
              alt="#VANLIFE"
            />
          </Link>
        </div>

        <nav>
          <div className="flex gap-4 text-md md:text-lg font-medium">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline font-bold scale-[1.05]"
                  : "hover:underline"
              }
              to="/host"
            >
              Host
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline font-bold scale-[1.05]"
                  : "hover:underline"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline font-bold scale-[1.05]"
                  : "hover:underline"
              }
              to="/vans"
            >
              Vans
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

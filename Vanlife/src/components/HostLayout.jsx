import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <section className="my-[10vh] flex flex-col items-center">
      <div className="w-[350px] sm:w-[500px] md:w-[650px] mt-12">
        <nav className="flex gap-4 font-medium text-[16px] md:text-[18px]">
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-navLink active" : "host-navLink"
            }
            end
            to="."
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-navLink active" : "host-navLink"
            }
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-navLink active" : "host-navLink"
            }
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "host-navLink active" : "host-navLink"
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>

        <div className="host-menu mt-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HostLayout;

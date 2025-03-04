import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import VansService from "../../../API/vansService";
import Loader from "../../../components/UI/Loader/Loader";
import { useFetching } from "../../../hooks/useFetching";

const HostVan = () => {
  const params = useParams();
  const [van, setVan] = useState(null);
  const [fetching, isLoading, error] = useFetching(async () => {
    const data = await VansService.getVan(params.id);
    setVan(data);
  });

  useEffect(() => {
    fetching();
  }, [params.id]);

  return (
    <section>
      {isLoading || !van ? (
        <div className="absolute left-[50%] -mt-[10vh] translate-x-[-50%]">
          <Loader />
        </div>
      ) : (
        <>
          <Link
            to=".."
            relative="path"
            className="inline-block mb-6 hover:scale-[1.02] transition cursor-pointer"
          >
            ← <span className="underline">Back to all vans</span>
          </Link>
          <div className="flex flex-col gap-4 bg-white p-6 rounded-sm">
            <div className="flex items-center gap-4">
              <img
                className="w-[100px] sm:w-[150px] md:w-[200px] rounded-sm"
                src={van.imageUrl}
                alt=""
              />
              <div className="flex flex-col gap-2 items-start">
                <span className={`${van.type} type text-[13px] md:text-[16px]`}>
                  {van.type[0].toUpperCase() + van.type.slice(1)}
                </span>
                <h2 className="text-[18px] md:text-[24px] font-bold">
                  {van.name}
                </h2>
                <div className="-mt-2 text-[14px] md:text-[16px]">
                  <span className="font-bold text-[16px] md:text-[18px]">
                    ${van.price}
                  </span>
                  /day
                </div>
              </div>
            </div>

            {/* Host van information */}
            <div className="flex flex-col gap-6">
              <nav className="flex gap-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "host-navLink active" : "host-navLink"
                  }
                  to="."
                  end
                >
                  Details
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "host-navLink active" : "host-navLink"
                  }
                  to="pricing"
                >
                  Pricing
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "host-navLink active" : "host-navLink"
                  }
                  to="photos"
                >
                  Photos
                </NavLink>
              </nav>

              <Outlet context={[van, setVan]} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HostVan;

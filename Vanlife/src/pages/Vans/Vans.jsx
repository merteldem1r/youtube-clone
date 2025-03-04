import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import VansService from "../../API/vansService";
import Error from "../../components/Error";
import Loader from "../../components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";

export function loader() {
  return VansService.getAllVans();
}

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [fetching, isLoading, error] = useFetching(async () => {
    const data = await VansService.getAllVans();
    setVans(data);
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  // get and set all vans
  useEffect(() => {
    fetching();
  }, []);

  // filtered vans elements
  const filteredVanElements = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans;

  // vans elements
  const vanElements = filteredVanElements.map(van => {
    return (
      <div
        key={van.id}
        className="van w-1/2 lg:w-1/3 mb-12 px-3 hover:scale-[1.03] transition cursor-pointer"
      >
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: typeFilter }}
        >
          <img
            className="w-full hover:opacity-80 transition"
            src={van.imageUrl}
            alt=""
          />
          <div className="my-3 flex justify-between">
            <h5 className="text-[14px] md:text-[18px] font-medium">
              {van.name}
            </h5>
            <div className="text-[13px] md:text-[16px] relative font-bold pr-2">
              ${van.price}{" "}
              <span className="absolute left-2 top-5 font-normal">/day</span>
            </div>
          </div>
          <span className={`${van.type} type text-[13px] md:text-[16px]`}>
            {van.type[0].toUpperCase() + van.type.slice(1)}
          </span>
        </Link>
      </div>
    );
  });

  // filter change function if there is several queries
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <section className="my-[9vh] flex flex-col items-center">
      {isLoading ? (
        <Loader/>
      ) : (
        <div className="sm:min-w-[650px] md:min-w-[700px] max-w-[825px] mt-8 p-3">
          {error ? (
            // Error handling
            <Error error={error}/>
          ) : (
            <>
              {/* Main Content */}
              <h3 className="mb-5 text-[20px] md:text-[24px] px-3 lg:text-[28px] font-semibold">
                Explore our van options
              </h3>

              {/* filter buttons */}
              <div className="flex gap-2 px-3">
                <button
                  onClick={() => handleFilterChange("type", "simple")}
                  className={
                    typeFilter === "simple"
                      ? "filter-btn bg-simple text-white"
                      : "filter-btn hover:bg-simple"
                  }
                >
                  Simple
                </button>
                <button
                  onClick={() => handleFilterChange("type", "luxury")}
                  className={
                    typeFilter === "luxury"
                      ? "filter-btn bg-luxury text-white"
                      : "filter-btn hover:bg-luxury"
                  }
                >
                  Luxury
                </button>
                <button
                  onClick={() => handleFilterChange("type", "rugged")}
                  className={
                    typeFilter === "rugged"
                      ? "filter-btn bg-rugged text-white"
                      : "filter-btn hover:bg-rugged"
                  }
                >
                  Rugged
                </button>
                {typeFilter && (
                  <button
                    onClick={() => setSearchParams({})}
                    className="ml-[auto] text-[13px] sm:text-[16px] underline"
                  >
                    Clear filter
                  </button>
                )}
              </div>

              {/* vans container */}
              <div className="vans-container flex flex-wrap mt-8">
                {vanElements}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Vans;

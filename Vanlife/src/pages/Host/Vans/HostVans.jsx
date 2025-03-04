import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VansService from "../../../API/vansService";
import Loader from "../../../components/UI/Loader/Loader";
import { useFetching } from "../../../hooks/useFetching";

const VansHost = () => {
  const [hostVans, setHostVans] = useState([]);
  const [fetching, isLoading, error] = useFetching(async () => {
    const data = await VansService.getHostVans();
    setHostVans(data);
  });

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <h3 className="text-[24px] md:text-[28px] font-bold mb-4">
        Your listed vans
      </h3>
      <div className="flex flex-col gap-4">
        {/* listed vans */}
        {isLoading ? (
          <div className="absolute left-[50%] -mt-[15vh] translate-x-[-50%]">
            <Loader />
          </div>
        ) : (
          <>
            {hostVans.map(van => {
              return (
                <Link to={van.id} key={van.id}>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-sm hover:scale-[1.02] cursor-pointer transition">
                    <img
                      className="w-[55px] md:w-[75px] rounded-sm"
                      src={van.imageUrl}
                    />
                    <div>
                      <h5 className="text-[16px] md:text-[18px] font-semibold">
                        {van.name}
                      </h5>
                      <span className="text-[14px] md:text-[16px]">
                        ${van.price}/day
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default VansHost;

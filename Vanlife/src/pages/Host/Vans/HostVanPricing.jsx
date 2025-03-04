import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const [van, setVan] = useOutletContext();

  return (
    <>
      <div>
        <span className="font-bold text-[18px] md:text-[24px]">
          ${van.price}
        </span>
        /day
      </div>
    </>
  );
};

export default HostVanPricing;

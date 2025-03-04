import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const [van, setVan] = useOutletContext();

  return (
    <>
      <img className="w-[65px] md:w-[100px]" src={van.imageUrl} alt="" />
    </>
  );
};

export default HostVanPhotos;

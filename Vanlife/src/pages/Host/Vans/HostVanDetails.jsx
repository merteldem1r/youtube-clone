import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetail = () => {
  const [van, setVan] = useOutletContext();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="font-bold">Name: </span>
        {van.name}
      </div>
      <div>
        <span className="font-bold">Category: </span>
        {van.type[0].toUpperCase() + van.type.substring(1)}
      </div>
      <div>
        <span className="font-bold">Description: </span>
        {van.description}
      </div>
      <div>
        <span className="font-bold">Visibility: </span>
        Public
      </div>
    </div>
  );
};

export default HostVanDetail;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import VansService from "../../API/vansService";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";

const VanPage = () => {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);
  const [fetching, isLoading, error] = useFetching(async () => {
    const data = await VansService.getVan(params.id);
    setVan(data);
  });

  // get and set separate van
  useEffect(() => {
    fetching();
  }, [params.id]);

  // path to previous page if there was a filter
  const search = location.state?.search || "";

  // back to "all" or filtered (simple etc.) vans string
  const backToVansStr = location.state?.type || "all";

  return (
    <section className="mt-[10vh] mb-[5vh] flex justify-center items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="my-8 p-3 flex flex-col gap-5 min-w-[300px] max-w-[500px]">
          <Link relative="path" to={`..?${search}`}>
            <div className="inline-block hover:scale-[1.02] transition cursor-pointer">
              ← <span className="underline">Back to {backToVansStr} vans</span>
            </div>
          </Link>
          <img className="w-full" src={van.imageUrl} alt="" />
          <div className="flex flex-col items-start gap-3">
            <span className={`${van.type} type`}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </span>
            <h2 className="text-[18px] md:text-[22px] lg:text-[26px] font-bold">
              {van.name}
            </h2>
            <div>
              <span className="font-bold text-md lg:text-lg">${van.price}</span>
              /day
            </div>
            <p>{van.description}</p>

            <MyButton>Rent this van</MyButton>
          </div>
        </div>
      )}
    </section>
  );
};

export default VanPage;

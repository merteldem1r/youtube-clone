import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-dash p-5">
        <div className="flex flex-col gap-5">
          <h5 className="text-[24px] md:text-[24px] font-bold">Welcome!</h5>
          <div>
            Income last <span className="underline">30 days</span>
          </div>
          <div className="text-[24px] md:text-[28px] font-bold">$2,260</div>
        </div>
        <span className="hover:underline cursor-pointer font-medium text-[14px] md:text-[16px]">
          Details
        </span>
      </div>
      <div className="flex items-center justify-between bg-dashDark px-5 py-10">
        <div className="flex items-center">
          <span className="font-semibold">Review score</span>
          <img
            className="w-[18px] ml-4 mr-1 inline"
            src="/img/star.png"
            alt=""
          />
          <span>5.0</span>/5
        </div>
        <span className="hover:underline cursor-pointer font-medium text-[14px] md:text-[16px]">
          Details
        </span>
      </div>

      {/* listed vans */}
      <div className="mt-4">
        <div className="flex justify-between p-5">
          <h3 className="text-[16px] md:text-[18px] font-semibold">
            Your listed Vans!
          </h3>
          <span className="hover:underline cursor-pointer">View all</span>
        </div>

        <div className="flex flex-col gap-3">
          {/* van item */}
          <div className="flex items-center p-5 rounded-sm bg-white">
            <img
              className="w-[60px] md:w-[75px] mr-4 rounded-sm"
              src="/img/vans/modest.png"
              alt=""
            />
            <div>
              <h4 className="font-semibold">Modest Explorer</h4>
              <span>$60/day</span>
            </div>
            <div className="ml-auto hover:underline cursor-pointer text-[14px] md:text-[16px]">
              Edit
            </div>
          </div>

          <div className="flex items-center p-5 rounded-sm bg-white">
            <img
              className="w-[60px] md:w-[75px] mr-4 rounded-sm"
              src="/img/vans/modest.png"
              alt=""
            />
            <div>
              <h4 className="font-semibold">Modest Explorer</h4>
              <span>$60/day</span>
            </div>
            <div className="ml-auto hover:underline cursor-pointer text-[14px] md:text-[16px]">
              Edit
            </div>
          </div>

          <div className="flex items-center p-5 rounded-sm bg-white">
            <img
              className="w-[60px] md:w-[75px] mr-4 rounded-sm"
              src="/img/vans/modest.png"
              alt=""
            />
            <div>
              <h4 className="font-semibold">Modest Explorer</h4>
              <span>$60/day</span>
            </div>
            <div className="ml-auto hover:underline cursor-pointer text-[14px] md:text-[16px]">
              Edit
            </div>
          </div>

          <div className="flex items-center p-5 rounded-sm bg-white">
            <img
              className="w-[60px] md:w-[75px] mr-4 rounded-sm"
              src="/img/vans/modest.png"
              alt=""
            />
            <div>
              <h4 className="font-semibold">Modest Explorer</h4>
              <span>$60/day</span>
            </div>
            <div className="ml-auto hover:underline cursor-pointer text-[14px] md:text-[16px]">
              Edit
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

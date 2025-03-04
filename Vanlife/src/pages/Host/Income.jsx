import React from "react";

const Income = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-[20px] md:text-[24px] font-bold">Income</h2>
        <div>
          Last <span className="underline">30 days</span>
        </div>
        <div className="text-[24px] md:text-[28px] font-bold">$2,260</div>
        <img
          className="w-[500px] -mt-8 mix-blend-darken"
          src="/img/statistics.png"
          alt=""
        />
      </div>

      {/* transactions container */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h3 className="text-[16px] md:text-[18px] font-bold">
            Your transactions (3)
          </h3>
          <div>
            Last <span className="underline">30 days</span>
          </div>
        </div>

        {/* transactions */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between bg-white p-3">
            <h5 className="text-[18px] font-bold">$720</h5>
            <span>01/12/22</span>
          </div>

          <div className="flex justify-between bg-white p-3">
            <h5 className="text-[18px] font-bold">$720</h5>
            <span>01/12/22</span>
          </div>

          <div className="flex justify-between bg-white p-3">
            <h5 className="text-[18px] font-bold">$720</h5>
            <span>01/12/22</span>
          </div>

          <div className="flex justify-between bg-white p-3">
            <h5 className="text-[18px] font-bold">$720</h5>
            <span>01/12/22</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;

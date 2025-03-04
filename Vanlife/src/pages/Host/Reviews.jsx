import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <h2 className="text-[20px] md:text-[24px] font-bold">Reviews</h2>
          <div className="text-sm">
            Last <span className="underline">30 days</span>
          </div>
        </div>
        <img
          className="w-[500px] -mt-8 mix-blend-darken"
          src="/img/comments.png"
          alt=""
        />
      </div>

      {/* reviews container */}
      <div className="flex flex-col gap-5">
        <h3 className="text-[16px] md:text-[18px] font-bold">Reviews (2)</h3>

        {/* reviews */}
        <div className="flex flex-col gap-4 pb-6 border-b-[1px] border-b-zinc-300">
          <div className="flex gap-1">
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
          </div>
          <div>
            <span className="font-semibold">Elliot</span>
            <span className="opacity-[.55] ml-2">December 1, 2022</span>
            <div className="mt-2">
              The beach bum is such as awesome van! Such as comfortable trip. We
              had it for 2 weeks and there was not a single issue. Super clean
              when we picked it up and the host is very comfortable and
              understanding. Highly recommend!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pb-6 border-b-[1px] border-b-zinc-300">
          <div className="flex gap-1">
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
            <img className="w-[18px] inline" src="/img/star.png" />
          </div>
          <div>
            <span className="font-semibold">Sandy</span>
            <span className="opacity-[.55] ml-2">November 23, 2022</span>
            <div className="mt-2">
              This is our third time using the Modest Explorer for our travels
              and we love it! No complaints, absolutely perfect!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

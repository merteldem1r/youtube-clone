import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-0 flex flex-col items-center">
      <div className="w-full">
        <img
          className="w-full max-h-[350px] object-cover object-[bottom]"
          src="/img/about.jpg"
          alt="About image"
        />
      </div>

      <div className="max-w-[600px] mt-8 p-3">
        <h3 className="mb-5 text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h3>
        <p className="text-[14px] md:text-[16px] font-[300]">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="my-12 py-8 px-6 rounded-sm bg-[#FFCC8D]">
          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold">
            Your destination is waiting. <br /> Your van is ready.
          </h3>
          <Link to="/vans">
            <button className="mt-4 p-3 bg-black rounded-lg text-white hover:underline">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

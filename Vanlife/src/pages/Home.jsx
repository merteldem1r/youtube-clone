import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const Home = () => {
  return (
    <main className="h-[91vh] flex justify-center items-center bg-homeImg bg-cover">
      <section className="z-10">
        <div className="max-w-[650px] flex flex-col gap-4 text-white pt-12 p-4">
          <div className="w-[150px] md:w-[185px] lg:w-[225px]">
            <img src="/img/logo-white.png" alt="" />
          </div>
          <h1 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="text-[13.5px] md:text-[16px] font-[300]">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip. This is the single
            page application made with React. Here I used React Router and many
            other React features. Check my github repositories for more
            projects.
          </p>
          <Link to="/vans">
            <MyButton>Find your van</MyButton>
          </Link>
        </div>
      </section>
      <div className="overlay"></div>
    </main>
  );
};

export default Home;

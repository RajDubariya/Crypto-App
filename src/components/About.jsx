import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about h-screen">
        <div className="flex justify-center p-6 h-[20%]">
          <div className=" flex items-center text-white ">
            <img src={logo} className=" w-[70px] invert " alt="CoinSage" />
            <Link to="/" className=" ml-3 text-3xl font-semibold">
              CoinSage
            </Link>
          </div>
        </div>

        <div className=" flex justify-center items-center text-center capitalize h-[50%] text-white">
          <div>
            <p className=" md:text-5xl sm:text-4xl text-3xl font-semibold">
              about coinSage
            </p>
            <p className=" md:text-2xl sm:text-lg text-base py-3">
              CoinSage is the simplest website to check prices of
              cryptocurrencies.
            </p>
            <p className=" md:text-xl text-sm">start analysing crypto with us !!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

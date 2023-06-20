import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" w-[100%] p-3 flex items-center justify-between border border-b">
        <div className=" flex items-center">
          <img src={logo} className=" w-[50px]" alt="CoinSage" />
          <Link to="/" className=" ml-3 text-xl font-semibold">
            CoinSage
          </Link>
        </div>

        <div className=" capitalize">
          <ul className=" flex items-center ">
            <li className=" px-4 text-lg">
              <Link to="/">home</Link>
            </li>
            <li className=" px-4 text-lg">
              <Link to="/news">news</Link>
            </li>
            <li className=" px-4 text-lg">
              <Link to="/about">about</Link>
            </li>
            <li className=" px-4 text-lg">
              <Link to="/contact">contact</Link>
            </li>
            {/* <li className=" px-4 text-lg">
              <div className=" relative">
                <input
                  type="text"
                  placeholder="Search Coin ..."
                  className="px-3 py-2 bg-[#f5f5f5] focus:outline-none rounded-lg  "
                />
                <button className=" absolute right-1.5 top-1.5 px-2 py-1 text-base ml-1 rounded-lg bg-cyan-500 text-white">
                  Search
                </button>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {BiMenuAltRight} from "react-icons/bi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className=" w-screen p-3 flex items-center justify-between border border-b">
        <div className=" flex items-center">
          <img src={logo} className=" w-[50px]" alt="CoinSage" />
          <Link to="/" className=" ml-3 text-xl font-semibold">
            CoinSage
          </Link>
        </div>

        <div className="capitalize hidden md:block">
          <ul className="flex items-center">
            <li className="px-4 text-lg">
              <Link to="/">home</Link>
            </li>
            <li className="px-4 text-lg">
              <Link to="/news">news</Link>
            </li>
            <li className="px-4 text-lg">
              <Link to="/about">about</Link>
            </li>
            <li className="px-4 text-lg">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            className="p-2 text-xl"
            onClick={handleMenu}
            aria-label="Menu"
          >
            <BiMenuAltRight size={27}/>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <ul>
            <li className="mb-2">
              <Link to="/" className="text-lg">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/news" className="text-lg">
                News
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* <div className=" capitalize">
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
          </ul>
        </div> */}
    </>
  );
};

export default Navbar;

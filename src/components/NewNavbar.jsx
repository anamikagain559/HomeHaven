import React, { useState } from "react";
import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";
function NewNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:block hidden bg-[#0ca39a] text-white py-2">
        <div className="container mx-auto lg:flex hidden item-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">HomeHaven,18 Grattan ST, Brooklyn</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>+1 206-214-2298</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p> support@homehaven.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
          <div className="lg:flex lg:item-center item-baseline lg:pt-0 pt-20 lg:h-auto h-screen"
         >
            <ul className="lg:flex hidden items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <div className="lg:hidden flex font-medium item-center leading-snug">
              <li className="py-2 flex font-medium items-center leading-snug">
                <button>Home</button>
              </li>
               <li className="py-2 flex font-medium items-center leading-snug">
                <a href="#">About</a>
              </li>
               <li className="py-2 flex font-medium items-center leading-snug">
                <a href="#">Listing</a>
              </li>
               <li className="py-2 flex font-medium items-center leading-snug">
                <a href="#">Services</a>
              </li>
               <li className="py-2 flex font-medium items-center leading-snug">
                <a href="#">Blogs</a>
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NewNavbar;

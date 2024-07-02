import React, { useState } from "react";
import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className=" top-0 z-50">
      {/* Top section */}
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

      {/* Bottom section */}
      <div className="bg-white ">
        <div className="container mx-auto flex items-center justify-between px-3">
          <div className="lg:block hidden">
            <div className="flex items-center lg:gap-3 gap-2 py-2 ">
              <div className="bg-[#0ca39a] rounded-full lg:px-4 px-3 lg:py-4 py-3 hoverBtn text-white">
                <TbHomeCheck />
              </div>
              <Link to="/">
                <h1 className=" lg:text-2xl font-semibold relative">
                  HomeHaven
                </h1>
              </Link>
            </div>
          </div>

          <div className="lg:hidden block">
            <button
              className="lg:hidden focus:outline-none flex justify-end right-4"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <>
                  <div className="absolute top-0 left-6 flex items-center lg:gap-3 gap-2 py-2 lg:hidden">
                    <div className="bg-[#0ca39a] rounded-full lg:px-4 px-3 lg:py-4 py-3 hoverBtn text-white">
                      <TbHomeCheck />
                    </div>
                    <Link to="/">
                      <h1 className=" lg:text-2xl font-semibold">HomeHaven</h1>
                    </Link>
                  </div>
                  <AiOutlineClose className="text-3xl text-[#0ca39a] absolute top-2 right-4" />
                </>
              ) : (
                <>
                  <div className="absolute top-0 left-3 flex items-center lg:gap-3 gap-2 py-2 lg:hidden">
                    <div className="bg-[#0ca39a] rounded-full lg:px-4 px-3 lg:py-4 py-3 hoverBtn text-white">
                      <TbHomeCheck />
                    </div>
                    <Link to="/">
                      <h1 className=" lg:text-2xl font-semibold">HomeHaven</h1>
                    </Link>
                  </div>
                  <FaBars className="text-3xl text-[#0ca39a] absolute top-2 right-4" />
                </>
              )}
            </button>
          </div>
          {/* Desktop navigation */}
          <div className="hidden lg:flex gap-x-4 list-none">
            <ul className="lg:flex items-center gap-x-4 list-none lg:ml-auto">
              <li className="py-2 flex font-medium items-center leading-snug px-2">
                <NavLink to="/" className="hoverBtn px-4 py-1 rounded-full">
                  Home
                </NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <NavLink to="/list" className="hoverBtn px-4 py-1 rounded-full">
                  Property List
                </NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <NavLink
                  to="/contact"
                  className="hoverBtn px-4 py-1 rounded-full"
                >
                  Contact
                </NavLink>
              </li>
              <li className="py-2 flex font-medium items-center leading-snug">
                <NavLink
                  to="/blogs"
                  className="hoverBtn px-4 py-1 rounded-full"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Login/Register */}
          <div className="hidden lg:flex gap-3 items-center pt-0">
            {user ? (
              <>
                <img
                  src={user.photoURL}
                  className="h-12 w-12 rounded-full"
                  alt=""
                 
                  data-tip={user.displayName}
                />
                <button
                  onClick={handleSignOut}
                  className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white"
                >
                  Sign Out
                </button>
                <Link to="/UpdateProfile">
                  <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white">
                    Update Profile
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile and Tablet navigation */}
          {navbarOpen && (
            <div className="lg:hidden flex flex-col gap-4 mt-10 h-screen  ">
              {/* Mobile and Tablet navigation links */}
              <NavLink
                to="/"
                className="hoverBtn  rounded-full px-4 py-1 hoverBtn "
              >
                Home
              </NavLink>
              <NavLink
                to="/list"
                className="hoverBtn  rounded-full px-4 py-1 hoverBtn "
              >
                Property List
              </NavLink>
              <NavLink
                to="/contact"
                className="hoverBtn  rounded-full px-4 py-1 hoverBtn "
              >
                Contact
              </NavLink>
              <NavLink
                to="/blogs"
                className="hoverBtn  rounded-full px-4 py-1 hoverBtn"
              >
                Blogs
              </NavLink>

              {/* Login/Register buttons */}
              {user ? (
                <>
                  <img
                    src={user.photoURL}
                    className="h-12 w-12 rounded-full"
                    alt=""
                    title={user.displayName}
                  />
                  <button
                    onClick={handleSignOut}
                    className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white"
                  >
                    Sign Out
                  </button>
                  <Link to="/UpdateProfile">
                    <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white">
                      Update Profile
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn text-white">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

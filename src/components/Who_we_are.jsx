import React from "react";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Who_we_are() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8">
      <div className="lg:w-2/5" data-aos="fade-up">
        <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
          WHO ARE WE
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Welcome to HomeHaven, your premier destination
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5]">
          we make it easy for renters to browse through a wide range of
          available properties and find the one that best suits their needs and
          preferences.
        </p>
        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#0c4f37] w-1/3"></FaHome>
            <span>
              <h1 className="text-[#0c4f37] text-lg font-medium">
                Customer-Centric Approach
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Our customer-centric approach means that we actively listen to
                your needs and preferences.
              </p>
            </span>
          </div>
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#0c4f37] w-1/3"></FaHome>
            <span>
              <h1 className="text-[#0c4f37] text-lg font-medium">
                Wide Range of Properties
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Our platform features up-to-date listings from trusted
                landlords.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div
        className="lg:w-1/2 flex item-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]"
        data-aos="fade-left"
      >
        <img
          src="https://i.ibb.co/sFF2YBd/image4.jpg"
          className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
          alt=""
        />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative lg:-top-20 -top-8">
          <img
            src="https://i.ibb.co/H25Pn9j/pexels-energepiccom-313691.jpg"
            alt=""
            className="w-full h-3/5 rounded-3xl shadow-md object-cover"
          />
          <img
            src="https://i.ibb.co/pLkpcPd/pexels-magda-ehlers-772177.jpgg"
            alt=""
            className="w-full h-2/5 rounded-3xl shadow-md object-cover"
          />
          <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
        </div>
      </div>
      <div className="lg:hidden block pt-4 py-16" data-aos="fade-up">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex item-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3"></FaHome>
          <span>
            <h1 className="text-[#0c4f37] text-lg font-medium">
              Donec consectetur adipisicing elit.
            </h1>
            <p className="text-[#0c4f37]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, quaerat.
            </p>
          </span>
        </div>
        <div
          className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex item-center gap-x-3 lg:w-4/5 mt-6"
          data-aos="fade-zoom-in"
        >
          <FaHome className="text-4xl text-[#0c4f37] w-1/3"></FaHome>
          <span>
            <h1 className="text-[#0c4f37] text-lg font-medium">
              Donec consectetur adipisicing elit.
            </h1>
            <p className="text-[#0c4f37]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, quaerat.
            </p>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Who_we_are;

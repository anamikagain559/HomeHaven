import React, { useState, useEffect } from "react";
import { PiBed } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import { FaFire } from "react-icons/fa";
import PropertyCard from "./PropertyCard";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Latest_package.css";

function Latest_package() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the animation duration
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const [currentStatus, setCurrentStatus] = useState("all");

  const handleStatusChange = (status) => {
    setCurrentStatus(status);
  };
  const filteredProperties =
    currentStatus === "all"
      ? properties
      : properties.filter((property) => property.status === currentStatus);
  return (
    <main className="container mx-auto px-3">
    
      <div className="lg:flex justify-between items-center" data-aos="fade-up">
        <div className="lg:w-3/5">
          <h1 className="text-[#6f9789] lg:text-xl uppercase">
            Checkout our new
          </h1>
          <h1 className=" lg:text-4xl  text-2xl font-medium text-[#6f9789] capitalize py-3">
            latest listed properties
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            assumenda saepe perferendis.
          </p>
        </div>
        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          <button
            onClick={() => handleStatusChange("all")}
            className={`category-button ${
              currentStatus === "all" ? "active" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleStatusChange("rent")}
            className={`category-button ${
              currentStatus === "rent" ? "active" : ""
            }`}
          >
            Rent
          </button>
          <button
            onClick={() => handleStatusChange("sale")}
            className={`category-button ${
              currentStatus === "sale" ? "active" : ""
            }`}
          >
            Sale
          </button>
          <button
            onClick={() => handleStatusChange("other")}
            className={`category-button ${
              currentStatus === "other" ? "active" : ""
            }`}
          >
            Other
          </button>
        </div>
      </div>
      <section className="mt-8" data-aos="fade-up">
        <Carousel
          className="z-20"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
        >
          {/* <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/public/assets/image8.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10">
                <FaFire></FaFire> New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 1,970</p>
              <p className="text-lg font-medium">Tranquil Haven in the Woods</p>
              <p className="text-sm ">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex item-center gap-x-2">
                    <PiBed className="text-xl"></PiBed> 3 Beds
                </span>
                <span className="flex item-center gap-x-2">
                    <LuBath lassName="text-xl"></LuBath> 2 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/public/assets/image6.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-10">
                <FaFire></FaFire> Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4"> 
              <p className="text-2xl font-medium">$ 5,970</p>
              <p className="text-lg font-medium">Tranquil Haven in the Woods</p>
              <p className="text-sm ">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex item-center gap-x-2">
                    <PiBed className="text-xl"></PiBed> 4 Beds
                </span>
                <span className="flex item-center gap-x-2">
                    <LuBath lassName="text-xl"></LuBath> 3 Bath
                </span>
              </div>
            </span>
          </div>
        
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/public/assets/image10.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#00ce3a] bg-[#f1fff1] rounded-full absolute bottom-10 left-10">
                <FaFire></FaFire> New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 1,970</p>
              <p className="text-lg font-medium">Tranquil Haven in the Woods</p>
              <p className="text-sm ">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex item-center gap-x-2">
                    <PiBed className="text-xl"></PiBed> 3 Beds
                </span>
                <span className="flex item-center gap-x-2">
                    <LuBath lassName="text-xl"></LuBath> 2 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/public/assets/image11.jpg"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 flex gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-10">
                <FaFire></FaFire> Discounted Prices
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 3,970</p>
              <p className="text-lg font-medium">Tranquil Haven in the Woods</p>
              <p className="text-sm ">103 Wright CourtBurien, WA 98168</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex item-center gap-x-2">
                    <PiBed className="text-xl"></PiBed> 3 Beds
                </span>
                <span className="flex item-center gap-x-2">
                    <LuBath lassName="text-xl"></LuBath> 2 Bath
                </span>
              </div>
            </span>
          </div> */}

          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </Carousel>
      </section>
    </main>
  );
}

export default Latest_package;

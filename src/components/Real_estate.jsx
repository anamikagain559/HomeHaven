import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdMaximize } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
function Real_estate() {
  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? "" : "text-white"} onClick={() => onClick}>
        <MdMaximize className="text-5xl" />
      </li>
    );
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the animation duration
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = [
    "https://i.ibb.co/XDwj3B4/image1.jpg",
    "https://i.ibb.co/thrjX5R/image2.jpg",
    "https://i.ibb.co/6WMM0CQ/frame1.jpg",
    "https://i.ibb.co/vXp1Z83/image5.jpg",
  ];
  const imageUrl = [
    "https://i.ibb.co/D7m5m7x/person-6.jpg",
    "https://i.ibb.co/C9wCwvc/person-1.jpg",
    "https://i.ibb.co/v3kFpzP/person-2.jpg",
    "https://i.ibb.co/8KFHJQ1/person-3.jpg",
    "https://i.ibb.co/TR44vHH/person-4.jpg",
  ];
  return (
    <main className="md:col-span-12 lg:mt-0 mt-[60px]">
      <div className="bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe] rounded-[560px] rounded-t-none">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen md:h-screen">
          <div className="lg:w-2/5 md:w-2/5" data-aos="fade-up">
            <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
              REAL ESTATE
            </p>
            <h1 className="lg:text-6xl text-3xl font-medium pt-3 pb-12">
              Find a perfect home you love...!
            </h1>
            <p className="text-[#808080] lg:text-base text-sm pb-8">
              enim ullam placeat voluptatem praesentium! Nobis odio commodi, ab
              cumque magni maiores quidem nulla deserunt Cupiditate dolores.
            </p>

            <Carousel
              className="z-20"
              swipeable={true}
              draggable={false}
              responsive={responsive}
              showDots
              arrows
              ssr={true}
              infinite
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 0.5s"
              transitionDuration={500}
              customDot={<CustomDot />}
            >
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt="" className="rounded-2xl" />
                </div>
              ))}
            </Carousel>
          </div>
          <form className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12">
            <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-3">
              <button
                type="button"
                className="w-1/2 text-[#808080] focus:border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor cursor-pointer "
              >
                For Sale
              </button>
              <button
                type="button"
                className="w-1/2 text-[#808080] focus:border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor cursor-pointer"
              >
                For Rent
              </button>
            </div>
            <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
              <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <select
                placeholder="Select Property Type"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6"
              >
                <option>Select Property Type</option>
              </select>
              <select
                placeholder="Select Rooms"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6"
              >
                <option>Select Rooms</option>
              </select>
              <span className="flex item-center text-[#0ca39a] gap-x-2">
                <VscSettings className="text-2xl" />
                <p>Advance Search</p>
              </span>
              <button
                type="button"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#0ca39a]"
              >
                <IoSearch />
                search
              </button>
            </div>
            <button className="bg-gradient-to-r form-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2 animate__animated animate__slideInDown "></button>
          </form>
        </div>
      </div>
      <div className="lg:hidden block container mx-auto px-3 py-8">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
          <p className="text-[#a5a5a5]">
            Trusted by 100+ companies across the globe!
          </p>
        </span>
        <div className="py-12">
          <Marquee>
            <img
              src="https://i.ibb.co/84J34cW/logo4.jpg"
              alt=""
              className="mr-4 w-8 h-8"
            />
            <img
              src="https://i.ibb.co/nsRX04y/logo2.png"
              alt=""
              className="mr-4 h-8"
            />
            <img
              src="https://i.ibb.co/fn4pL9N/logo1.png"
              alt=""
              className="mr-4 h-8"
            />
            <img
              src="https://i.ibb.co/94CY4G0/unnamed.webp"
              alt=""
              className="mr-4 h-8"
            />
            <img
              src="https://i.ibb.co/4FBmY1L/netflix-logo.webp"
              alt=""
              className="mr-4 h-8"
            />
          </Marquee>
        </div>
      </div>
      <div className="lg:flex justify-center lg:-mt-7 md:-mt-7 gap-x-8 lg:px-0 px-3">
        <div className="bg-white rounded-full py-4 lg:px-8 px-3 flex  items-center justify-center gap-4 shadow-2xl">
          <span className="flex items-center relative h-10 w-44">
            {imageUrl.map((img, index) => (
              <div key={index} className="lg:mr-7 mr-5 h-full">
                <img
                  src={img}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover absolute bg-[#F2F2F2] border border-white"
                />
              </div>
            ))}
            <button className="bg-black w-8 h-8 rounded-full text-white relative flex item-center justify-center pt-2">
              <FaPlus></FaPlus>
            </button>
          </span>
          <p className="w-36 md:text-xl font-medium">72k+ Happy Customers</p>
        </div>
        <div className="bg-white rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-4 shadow-2xl">
          <img
            src="https://i.ibb.co/2j9FL7w/image11.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <p className="md:text-xl font-medium">
            200+ New <br></br> Listings Everyday!
          </p>
        </div>
      </div>
      <div className="lg:block hidden container mx-auto px-3 py-16">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto animate__animated animate__slideInDown animate__slower	7s animate__infinite	infinite"></button>
          <p className="text-[#a5a5a5]">
            Trusted by 100+ companies across the globe!
          </p>
        </span>
        <div className="py-12">
          <Marquee>
            <img
              src="https://i.ibb.co/84J34cW/logo4.jpg"
              alt=""
              className="mr-16  h-16"
            />
            <img
              src="https://i.ibb.co/nsRX04y/logo2.png"
              alt=""
              className="mr-16 h-16"
            />
            <img
              src="https://i.ibb.co/fn4pL9N/logo1.png"
              alt=""
              className="mr-16 h-16"
            />
            <img
              src="https://i.ibb.co/94CY4G0/unnamed.webp"
              alt=""
              className="mr-16 h-16"
            />
            <img
              src="https://i.ibb.co/4FBmY1L/netflix-logo.webp"
              alt=""
              className="mr-16 h-16"
            />
          </Marquee>
        </div>
      </div>
    </main>
  );
}

export default Real_estate;

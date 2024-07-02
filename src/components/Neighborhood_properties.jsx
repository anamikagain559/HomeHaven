import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Neighborhood_properties() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // You can customize the animation duration
  }, []);
  return (
    <main className="container mx-auto px-3 lg:pt-24">
      <span className="flex justify-center pb-12"  data-aos="zoom-out">
        <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto"></button>
      </span>
      <p className="text-[#0c4f37] uppercase md:text-xl text-lg"  data-aos="zoom-out">
        Areas across the town
      </p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12" data-aos="zoom-out">Vacation Rentals Properties</h1>
      <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
        <div className="relative md:col-span-2">
          <img src="https://i.ibb.co/rFHRh1P/image10.jpg" alt="" data-aos="zoom-out" className="rounded-3xl object-cover md:h-80 h-40 w-full"/>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">216</p>
            <p className="text-white lg:text-xl md:text-base text-sm">Philadelphia, Pennsylvania</p>
          </span>
        </div>
        <div className="relative md:col-span-2" data-aos="zoom-out">
          <img src="https://i.ibb.co/F7m9YWP/image7.jpg" alt=""  className="rounded-3xl object-cover md:h-80 h-40 w-full"/>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">160</p>
            <p className="text-white lg:text-xl md:text-base text-sm">San Francisco, California</p>
          </span>
        </div>
        <div className="relative md:col-span-3" data-aos="zoom-out">
          <img src="https://i.ibb.co/2j9FL7w/image11.jpg" alt=""  className="rounded-3xl object-cover md:h-80 h-40 w-full"/>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">107</p>
            <p className="text-white lg:text-xl md:text-base text-sm">San Antonio, Texas</p>
          </span>
        </div>
        <div className="relative md:col-span-3" data-aos="zoom-out">
          <img src="https://i.ibb.co/vXp1Z83/image5.jpg" alt=""  className="rounded-3xl object-cover md:h-80 h-40 w-full"/>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">87</p>
            <p className="text-white lg:text-xl md:text-base text-sm">Chicago, Illinois</p>
          </span>
        </div>
        <div className="relative md:col-span-4" data-aos="zoom-out">
          <img src="https://i.ibb.co/6WMM0CQ/frame1.jpg" alt=""  className="rounded-3xl object-cover md:h-80 h-40 w-full"/>
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">176</p>
            <p className="text-white lg:text-xl md:text-base text-sm">Los Angeles, California</p>
          </span>
        </div>
      </section>
      <span className="flex justify-end pb-12 w-4/5" data-aos="zoom-out">
      <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
      </span>
    </main>
  );
}

export default Neighborhood_properties;

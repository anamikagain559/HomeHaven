import React from "react";
import { PiBed } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
function PropertyCard({ property }) {
  const {
    id,
    image,
    price,
    estate_title,
    location,
    facilities,
    bedrooms,
    bathrooms,
  } = property;

  // Count the number of beds and baths based on facilities
  const numBeds = facilities.filter(
    (facility) => facility === "bedroom"
  ).length;
  const numBaths = facilities.filter(
    (facility) => facility === "bathroom"
  ).length;
  return (
    <div className="relative">
      <div className="relative h-80 sm:w-80">
        <img
          src={image}
          alt=""
          className="rounded-3xl h-full w-full object-cover"
        />
      </div>
      <span className="flex flex-col gap-y-1 py-4">
        <p className="text-2xl font-medium">{price}</p>
        <p className="text-lg font-medium">{estate_title}</p>
        <p className="text-sm">{location}</p>
        <div className="flex items-center gap-x-4 text-sm">
          <span className="flex item-center gap-x-2">
            <PiBed className="text-xl" /> {bedrooms} Beds
          </span>
          <span className="flex item-center gap-x-2">
            <LuBath className="text-xl" /> {bathrooms} Bath
          </span>
        </div>
        <div className="pt-2 flex justify-left">
          <Link to={`/propertyDetails/${id}`}>
            <button className=" text-[#0ca390] rounded-full border border-[#0ca390] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
              View Property
            </button>
          </Link>
        </div>
      </span>
    </div>
  );
}

export default PropertyCard;

import React from "react";
import { FaBed, FaBath, FaRulerHorizontal } from "react-icons/fa";
import Navbar from "./Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
function Details_page() {

  const properties = useLoaderData();
  console.log(properties);
  const { id } = useParams();
  const idInt = parseInt(id);
  // Mock property details data (replace with actual data fetched from API)
  const propertyDetails =  properties.find((property) => property.id === idInt);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 py-8 relative mt-8">
      <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:h-full">
          <div className="lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <img src={propertyDetails.image} alt="Property" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {propertyDetails.details.images.map((image, index) => (
              <div key={index} className="h-30 rounded-lg overflow-hidden shadow-lg ">
                <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#68ac94]">{propertyDetails.estate_title}</h2>
          <p className="text-lg text-gray-500">{propertyDetails.location}</p>
          <p className="text-2xl font-bold mt-2">{propertyDetails.price}</p>
          <div className="mt-4">
            <p><strong>Bedrooms:</strong> {propertyDetails.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {propertyDetails.bathrooms}</p>
            <p><strong>Area:</strong> {propertyDetails.area}</p>
            <p><strong>Status:</strong> {propertyDetails.status}</p>
            <p><strong>Description:</strong> {propertyDetails.description}</p>
            <p><strong>Facilities:</strong></p>
            <ul className="ml-5 list-disc list-outside text-[#6f9789]">
              {propertyDetails.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
          <button className={`mt-4 px-4 py-2 rounded-md ${propertyDetails.status === 'sale' ? 'bg-[#0ca390] text-white' : 'bg-blue-500 text-white'}`}>
             For {capitalizeFirstLetter(propertyDetails.status)}
            </button>
        </div>
      </div>
     
        <span className="flex justify-end pb-12 w-4/5">
      <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
      </span>
    </div>
<Footer></Footer>
  </>
  );
}
export default Details_page;

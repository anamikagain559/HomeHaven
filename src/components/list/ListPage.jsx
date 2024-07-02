import "./list.css";
import MapPage from "../MapPage";
import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "animate.css";

function ListPage() {

  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/public/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="listPage px-10">
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {properties.map((item, index) => (
              // Apply animate__animated class and animate.css animation class
              <div
                key={item.id}
                className="animate__animated animate__lightSpeedInRight delay-${index + 1}s"
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <MapPage items={data} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ListPage;

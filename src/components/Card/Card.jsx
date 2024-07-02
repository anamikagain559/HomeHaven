import { Link } from "react-router-dom";

function Card({ item }) {
  const {
    id,
    image,
    price,
    estate_title,
    location,
    facilities,
    bedrooms,
    bathrooms,
  } = item;
  return (
    <div className="flex lg:flex-row flex-col gap-4 bg-base-100 shadow-xl p-2 rounded-3xl pl-2">
      <figure>
        <img src={image} alt="Movie" className="w-[400px] h-[250px] rounded-3xl" />
      </figure>
      <div className="card-body">
        <Link to={`/propertyDetails/${id}`}>
        
          <h2 className="card-title">{estate_title} </h2>
        </Link>
        <div className="flex text-[#444] gap-2">
        
          <img src="https://i.ibb.co/SX08GgJ/pin.png" alt="" className="text-[#444] h-5 w-5" />
          <span>{location}</span>
        </div>
        <div className="text-lg font-light px-5 py-2 rounded-2xl bg-yellow-100 w-[120px]">
          {price}
        </div>
        <div className="bottom flex justify-between">
          <div className="features flex gap-6">
            <div className="feature flex items-center gap-2">
              <img src="https://i.ibb.co/26LwF9g/bed.png" alt="" className="w-4 h-4" />
              <span>{bedrooms} bedroom</span>
            </div>
            <div className="feature flex items-center gap-2">
              <img src="https://i.ibb.co/CBmrx9g/bath.png" alt="" className="w-4 h-4" />
              <span>{bathrooms} bathroom</span>
            </div>
          </div>
          <div className="icons flex gap-6">
            <div className="icon">
              <img src="https://i.ibb.co/2N2n7n8/save.png" alt="" className="w-4 h-4" />
            </div>
            <div className="icon">
              <img src="https://i.ibb.co/Hz5m4BC/chat.png" alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <Link to={`/propertyDetails/${id}`}>
          <div className="card-actions justify-left">
            <button className=" bg-[#7aeac3] px-4 py-2 rounded-2xl">
              See Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;

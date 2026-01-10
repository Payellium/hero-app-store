import React from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ singleData }) => {
  const { image, title, ratingAvg, downloads, } = singleData;

  return (
    <Link to={`/appDetails/${singleData.id}`}>
      <div className="card bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <figure>
          <img
            className="w-full h-32 object-contain rounded-lg"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge bg-[#F1F5E8] text-[#00D390]">
              <img className="w-4 h-4" src={download} alt="" />
              {downloads}
            </div>
            <div className="badge bg-[#FFF0E1] text-[#FF8811]">
              <img className="w-4 h-4" src={rating} alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

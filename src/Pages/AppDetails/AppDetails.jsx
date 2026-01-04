import React from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import review from "../../assets/icon-review.png";
import rating from "../../assets/icon-ratings.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  const singleApp = data.find((app) => app.id === appId);
  // console.log(singleApp);
  //   console.log(data);
  const {
    companyName,
    title,
    image,
    description,
    downloads,
    ratings,
    ratingAvg,
    reviews,
    size,
  } = singleApp;
  console.log(ratings);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 border-b border-gray-400">
        <div className="flex-1 h-full">
          <img className="h-full" src={image} alt="" />
        </div>
        <div className="flex-2 h-f">
          <div className="border-b border-gray-400 my-5">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="text-[#627382] mb-5">
              Developed By{" "}
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <img src={download} alt="" />
              <p className="my-1">Downloads</p>
              <span className="text-3xl font-extrabold">{downloads}</span>
            </div>
            <div>
              <img src={rating} alt="" />
              <p className="my-1">Average Ratings</p>
              <span className="text-3xl font-extrabold">{ratingAvg}</span>
            </div>
            <div>
              <img src={review} alt="" />
              <p className="my-1">Total Reviews</p>
              <span className="text-3xl font-extrabold">{reviews}</span>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn btn-active btn-accent text-white">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-5 border-b border-gray-400">
        <h1 className="font-semibold my-5">Ratings</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratings} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h1 className="font-semibold my-5">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

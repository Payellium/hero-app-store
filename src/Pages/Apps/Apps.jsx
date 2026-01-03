import React from "react";
import AppCard from "../AppCard/AppCard";

const Apps = ({ data }) => {
  const firstEight = data.slice(0, 8);
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center my-3">Trending Apps</h1>
      <p className="text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {firstEight.map((singleData) => (
          <AppCard key={singleData.id} singleData={singleData}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;

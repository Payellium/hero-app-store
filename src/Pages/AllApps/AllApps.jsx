import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";


const AllApps = () => {
  const data = useLoaderData();
  // console.log(data);

  const [search, setSearch] = useState("");
  const filteredApps = data.filter((singleData) =>
    singleData.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="text-center my-5">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between flex-col md:flex-row my-3">
        <h4 className="font-semibold">({data.length})Apps Found</h4>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
        {data.map((singleData) => (
          <AppCard key={singleData.id} singleData={singleData}></AppCard>
        ))}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4 space-y-2">
        {filteredApps.length ? (
          filteredApps.map((singleData) => (
            <AppCard key={singleData.id} singleData={singleData}></AppCard>
          ))
        ) : (
          <p className="text-center text-gray-400">No App Found..</p>
        )}
      </div>
    </div>
  );
};

export default AllApps;

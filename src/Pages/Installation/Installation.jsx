import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApps } from "../../Utility/appsInstalled";

import InstalledAppCard from "../InstalledAppCard/InstalledAppCard";


const Installation = () => {
  const [installedList, setInstalledList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  console.log(installedList);

  useEffect(() => {
    const installedApps = getInstalledApps();
    const convertedInstalledApps = installedApps.map((id) => parseInt(id));
    const myInstalledApps = data.filter((app) =>
      convertedInstalledApps.includes(app.id)
    );
    setInstalledList(myInstalledApps);
  }, []);

  const handleSort = (order) => {
    setSort(order);
    const sortedBySize = [...installedList];
    if (order === "High-Low") {
      sortedBySize.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "Low-High") {
      sortedBySize.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledList(sortedBySize);
  };

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold my-2">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">({installedList.length}) Apps Found</h1>
        <div className="dropdown">
          <div
            tabIndex={0}
            
            role="button"
            className="btn m-1 text-[#627382]"
          >
            Sort By Downloads: {sort ? sort : ""}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#627382]"
          >
            <li>
              <a onClick={()=>handleSort("High-Low")}>High-Low</a>
            </li>
            <li>
              <a onClick={()=>handleSort("Low-High")}>Low-High</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        
        {installedList.map((app) => (
          // <AppCard key={app.id} singleData={app}></AppCard>
          <InstalledAppCard key={app.id} setInstalledList={setInstalledList} app={app}></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;

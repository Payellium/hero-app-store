import React from "react";
import hero from "../../assets/hero.png";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png"
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="text-center my-3">
        <h1 className="text-4xl font-bold my-2">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] my-2 mb-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <Link to="https://play.google.com/store/"><button className="btn p-3 mr-3"><img src={googlePlay} alt="" />Google Play</button></Link>
        <Link to="https://www.apple.com/app-store/"><button className="btn p-3"><img src={appStore} alt="" />App Store</button></Link>
      </div>
      <div>
        <img className="max-w-md w-full mx-auto" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;

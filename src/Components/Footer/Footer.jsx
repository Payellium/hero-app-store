import React from "react";
import logo from "../../assets/logo.png";
import tweeter from "../../assets/tweeter.png"
import { Link } from "react-router";
import linkedin from "../../assets/linkedin.png"
import fb from "../../assets/fb.png"

const Footer = () => {
  return (
    <footer className="footer footer-horizontal mt-10 footer-center bg-[#001931] text-white rounded p-10">
      <div className="flex">
        <img className="w-10 h-10" src={logo} alt="" />
        <a className="btn btn-ghost text-xl">HERO.IO</a>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://x.com/">
            <img src={tweeter} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/">
            <img src={linkedin} alt="" />
          </Link>
          <Link to="https://www.facebook.com/">
            <img src={fb} alt="" />
          </Link>
        </div>
      </nav>
      <aside className="border-t">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

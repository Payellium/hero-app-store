import React from "react";
import gitcon from "../../assets/fi_2111432.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  // const [active, setActive] = useState[false];

  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="apps">Apps</Link>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex">
            <img className="w-10 h-10" src={logo} alt="" />
            <button className="btn btn-ghost text-xl text-[#632EE3]">
              HERO.IO
            </button>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="apps">Apps</Link>
          </li>
          <li>
            <Link>Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/Payellium">
          <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-3 rounded-lg font-medium flex gap-1 items-center">
            <img className="w-5 h-5" src={gitcon} alt="" />
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

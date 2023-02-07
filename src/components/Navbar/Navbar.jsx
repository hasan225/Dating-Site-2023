import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { auth, navItems } from "../../Data";

const Navbar = () => {
  const location = useLocation();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollHeight(window.pageYOffset);
  });
  return (
    <nav id="navbar"
      className={`navbar ${scrollHeight > 30 ? "bg-gray-800 text-white" : ""}`}
    >
      <ul
        className={`navList ${
          burgerOpen ? "lg:translate-x-0" : "lg:translate-x-full"
        }`}
      >
        {navItems.map((item, i) => {
          const { title, path } = item;
          return (
            <li
              className={`text-gray-700 hover:text-emerald-600 hover:duration-300 font-semibold capitalize ${
                location.state === title && "text-emerald-600"
              }`}
              key={i}
            >
              <Link to={path} state={title}>
                {item.title}
              </Link>
            </li>
          );
        })}
         {auth.map((item, i) => {
          const { title, path, cls } = item;
          return (
            <li
              className={`hidden lg:flex  hover:duration-300 font-semibold capitalize ${cls} ${
                location.state === title && "text-white"
              }`}
              key={i}
            >
              <Link to={path} state={title}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="logo">
        <Link to="/">
          <img className="w-16" src={Logo} alt="" />
        </Link>
      </div>
      <ul className="navList auth justify-end lg:hidden">
        {auth.map((item, i) => {
          const { title, path, cls } = item;
          return (
            <li
              className={`  hover:duration-300 font-semibold capitalize ${cls} ${
                location.state === title && "text-white"
              }`}
              key={i}
            >
              <Link to={path} state={title}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        className={`hidden lg:block z-50 text-2xl ${
          scrollHeight > 30 ? "text-pink-500" : "text-teal-800"}`}
        onClick={() => {
          setBurgerOpen((prev) => !prev);
        }}
      >
        {burgerOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

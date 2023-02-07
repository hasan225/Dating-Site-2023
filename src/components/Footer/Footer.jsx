import React from "react";
import { quickLinks } from "../../Data";
import { Link, useLocation } from "react-router-dom";
import {RiLinkedinLine} from "react-icons/ri"
import {TfiReddit} from "react-icons/tfi"
import {FiGithub} from "react-icons/fi"

const Footer = () => {
  const location = useLocation();
  return (
    <section className="Section Footer bg-gray-800 text-white">
      <div className="container pt-20">
        <div className="top flexDiverge gap-52 items-start lg:gap-12 md:inline">
          <div className="newslatter flex flex-col gap-4 md:mb-10 md:items-center">
            <h4 className="supHeading">Subscribe for our newslatter</h4>
            <div className="inputs h-10 flex gap-1 md:w-full">
              <input
                className="text-gray-900 h-full border-none outline-none px-3 rounded-tl-3xl rounded-bl-3xl md:w-full"
                type="text"
                placeholder="Email address"
              />
              <button className="bg-teal-600 h-full px-4 border-2 rounded-tr-3xl rounded-br-3xl">
                Go
              </button>
            </div>
          </div>
          <div className="quick-links flexDiverge items-start flex-1 gap-4 md:text-center">
            {quickLinks.map((item, i) => {
              const { title, links } = item;
              return (
                <div key={i} className="nav-wrap flex flex-col gap-5">
                  <h4 className="supHeading">{title}</h4>
                  <ul className=" gap-4  w-auto flex flex-col">
                    {links.map((link, i) => {
                      return (
                        <li
                          key={i}
                          className={`hover:text-emerald-600 hover:duration-300 capitalize ${
                            location.state === link && "text-emerald-600"
                          }`}
                        >
                          {/* <Link to={link} state={link}> */}
                          {link}
                          {/* </Link> */}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bottom flexDiverge pt-20">
          <div className="left text-2xl flex items-center gap-6">
                <FiGithub/>
                <TfiReddit/>
                <RiLinkedinLine/>
          </div>
          <ul className="right flex gap-6">
                 <li>Terms & Conditons</li>
                 <li> Privacy Policy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

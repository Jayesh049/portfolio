import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

import { logo1, logo2, logo3, logo4, menu, close } from "../assets";

const Navbar = () => {
  //concept is that if active then show the title in white text otherwise in grey format so that we can find the medium of the title is clicked or not
  const [active, setActive] = useState("");

  //toggle concept
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); //setActive keeps track of where we are at the page
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo4} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Jayesh &nbsp;
            <span className="sm:block">| Portfolio</span>
          </p>
        </Link>
        <ul
          className="list-none hidden sm:flex
           flex-row gap-10"
        >
          {/* mapping concept */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] 
              font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div
          className="sm:hidden flex flex-1 justify-end
           items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
              object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* for smaller devices what we have to do */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute 
            top-20 right-0 mx-4 my-2 min-w-[140px]
            z-10 rounded-xl`}
          >
            <ul
              className="list-none flex justify-end
              items-start flex-col gap-4"
            >
              {/* mapping concept */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer
              text-[16px]`}
                  // if we are putting two properties in once use this {}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

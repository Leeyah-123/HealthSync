import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo-rmbg.png";
import { Home, Settings, Users, Calendar } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleClickedHamburger = () => {
    setIsHamburgerClicked((preValue) => !preValue);
  };

  return (
    <nav>
      <div
        className={`lg:block w-[100px] lg:w-[150px] pt-14 lg:pt-8 px-4 h-full bg-lemon ${
          isHamburgerClicked
            ? "block z-10 lg:z-0 fixed lg:static top-0"
            : "hidden "
        }`}
      >
        <img
          src={logo}
          alt="healthSync-logo"
          className="w-[70px] h-[60px] lg:w-[120px] lg:h-[110px]"
        />
        <ul className="flex items-center flex-col mt-16 gap-8">
          <li>
            <NavLink
              aria-label="home"
              className="hover:bg-lightGray2 duration-[.4s] w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
              to={"home"}
              onClick={() => setIsHamburgerClicked(false)}
            >
              <Home color="white" />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="forum"
              className="hover:bg-lightGray2 duration-[.4s]  w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
              to={"forum"}
              onClick={() => setIsHamburgerClicked(false)}
            >
              <Users color="white" />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="calendar"
              className="hover:bg-lightGray2  duration-[.4s] w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
              to={"calendar"}
              onClick={() => setIsHamburgerClicked(false)}
            >
              <Calendar color="white" />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="settings"
              className="hover:bg-lightGray2  duration-[.4s] w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
              to={"settings"}
              onClick={() => setIsHamburgerClicked(false)}
            >
              <Settings color="white" />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* hamburger menu icon */}
      <div
        onClick={handleClickedHamburger}
        className={`mt-8 ml-[20px] md:ml-[40px] cursor-pointer top-0 lg:hidden ${
          isHamburgerClicked ? "z-20 fixed" : "absolute"
        }`}
      >
        <div
          className={`h-1 w-[27px] bg-black  duration-500 ${
            isHamburgerClicked
              ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] "
              : ""
          } `}
        ></div>
        <div
          className={`h-1 w-[27px] bg-black mt-2 duration-500 ${
            isHamburgerClicked
              ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]"
              : ""
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;

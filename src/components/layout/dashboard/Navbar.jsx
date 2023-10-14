import { NavLink } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import DashboardRoutes from '../../../routes/dashboard.routes';
import logo from '/assets/logo-rmbg.png';

const DashboardNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavOpen = () => setIsNavOpen(!isNavOpen);
  const navRef = useRef();

  useEffect(() => {
    // disable scrolling of body when navbar is open
    if (isNavOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'unset';

    const handleClickOutside = (e) => {
      if (isNavOpen && !navRef.current.contains(e.target)) setIsNavOpen(false);
    };

    // close the nav if the user clicks outside
    document.body.addEventListener('click', handleClickOutside);

    // cleanup event listener on unmount
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isNavOpen]);

  return (
    <nav ref={navRef}>
      <div
        className={`lg:block w-[100px] lg:w-[150px] pt-14 lg:pt-8 px-4 h-full overflow-y-auto bg-lemon ${
          isNavOpen ? 'block z-10 lg:z-0 fixed lg:static top-0' : 'hidden '
        }`}
      >
        <img
          src={logo}
          alt="healthSync-logo"
          className="w-[70px] h-[60px] lg:w-[120px] lg:h-[110px]"
        />
        <ul id="navigation" className="flex items-center flex-col mt-16 gap-8">
          {DashboardRoutes.children
            .filter(({ path }) => path)
            .map(({ path, icon }) => (
              <li key={path}>
                <NavLink
                  aria-label="home"
                  className="hover:bg-lightGray2 duration-[.4s] w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-[12px] lg:rounded-[20px] flex justify-center items-center"
                  to={path}
                  onClick={() => setIsNavOpen(false)}
                >
                  {icon}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      {/* hamburger menu icon */}
      <button
        aria-controls="navigation"
        aria-expanded={isNavOpen}
        onClick={toggleNavOpen}
        className={`mt-8 top-0 left-5 sm:left-10 md:left-20 lg:hidden ${
          isNavOpen ? 'z-20 fixed' : 'absolute'
        }`}
      >
        <span
          className={`block h-1 w-[27px] bg-black duration-500 ${
            isNavOpen
              ? 'translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] '
              : ''
          } `}
          aria-hidden
        />
        <span
          className={`block h-1 w-[27px] bg-black mt-2 duration-500 ${
            isNavOpen
              ? 'translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]'
              : ''
          }`}
        />
      </button>
    </nav>
  );
};

export default DashboardNavbar;

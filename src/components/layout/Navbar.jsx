import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="flex justify-around font-bold text-btblack py-5">
      <Link to="/" className="uppercase text-lg md:text-2xl mt-1">
        health<span className="text-lemon">sync</span>
      </Link>
      <button
        type="button"
        className="md:hidden text-2xl pt-2.5"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`gap-x-20 capitalize px-2  md:flex absolute left-0 bg-white  md:top-0 transition-all duration-500  w-full md:w-fit md:static pb-14 md:pb-0 ${
          isNavOpen ? 'top-20' : '-top-96'
        }`}
      >
        <ul className="md:flex gap-x-8 mt-1.5 space-y-5 md:space-y-0 pb-10 md:pb-0">
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
          <li>
            <NavLink to="/auth/login">login</NavLink>
          </li>
        </ul>
        <NavLink
          to="/auth/signup"
          className="bg-btblack text-bgray px-6 py-2.5 rounded-3xl"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

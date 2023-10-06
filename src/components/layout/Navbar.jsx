import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-around font-bold text-btblack py-5">
      <h1 className="uppercase text-lg md:text-2xl mt-1">
        health<span className="text-tlgreen">sync</span>
      </h1>
      <div className="gap-x-20 capitalize hidden md:flex">
        <ul className="flex gap-x-8 mt-1.5">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/#about">about</NavLink>
          </li>
          <li>
            <NavLink to="/#feature">feature</NavLink>
          </li>
          <li>
            <NavLink to="/#download">download</NavLink>
          </li>
          <li>
            <NavLink to="/#pricing">pricing</NavLink>
          </li>
        </ul>
        <NavLink
          to="/contact"
          className="bg-btblack text-bgray px-6 py-2.5 rounded-3xl"
        >
          contact us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

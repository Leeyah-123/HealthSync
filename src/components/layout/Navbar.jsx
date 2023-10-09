
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between items-center list-none text-center">
      <Link to="/">
        <img
          className="w-12 h-12"
          src="/assets/hSyncLogo.png"
          alt="HealthSync Logo"
        ></img>
      </Link>
      <ul className="inline-flex items-center">
        <li className="mx-2 my-2 font-mono text-[.9rem] after:h-[3px] after:w-0 cursor-pointer after:flex after:bg-[#CDFB47] after:duration-300 hover:after:w-full navlink">
          <NavLink to="/auth/signup" className={'child'}>Signup</NavLink>
        </li>
        <li className="mx-2 my-2 font-mono text-[.9rem] after:h-[3px] after:w-0 cursor-pointer after:flex after:bg-[#CDFB47] after:duration-300 hover:after:w-full [&>a.active]:after:w-full navlink">
          <NavLink to="/auth/login">Signin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

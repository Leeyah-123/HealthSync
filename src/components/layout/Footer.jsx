import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '/assets/logo-rmbg.png';
const Footer = () => {
  return (
    <footer className="grid gap-5 lg:grid-cols-2 pb-8 pt-[4rem] px-[5%]  ">
      <div className="">
        <Link
          to="/"
          className="uppercase text-lg md:text-2xl mt-1 flex items-center gap-y-2"
        >
          <img
            src={logo}
            alt=""
            className="w-[48px] lg:w-[62px] h-[42px] lg:h-[55px]"
          />
          <h1 className="font-black">
            {' '}
            health<span className="text-green">sync</span>
          </h1>
        </Link>
        <p className="text-lightblack mt-2 mr-3 sm:mr-16">
          We&#39;re dedicated to helping you achieve yout health goals,
          providing you with the tools, support
        </p>
      </div>
      <div className=" grid grid-cols-2">
        <div className="grid gap-y-1">
          <h2 className="text-btblack  text-lg font-bold capitalize">
            Contact
          </h2>
          <a href="mailto:healthsync@gmail.com">Email Us</a>
          <a href="tel:+09028428492">Call Us</a>
          <a href="sms:09028428492">Send Us An SMS</a>
        </div>

        <div className="grid gap-y-1">
          <h2 className="text-btblack font-bold capitalize">Quick Links</h2>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup">Signup</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 mx-auto space-x-5 lg:mx-0">
        <div className="">
          <button
            type="button"
            className="py-3 px-10  bg-btblack h-fit text-bgray capitalize font-bold rounded-3xl"
          >
            join us now
          </button>
          <button
            aria-label="next"
            role="button"
            className="p-3 bg-lemon rounded-full h-fit w-fit -ml-2 mt-0.5"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex gap-8 py-2">
          <Link
            to="#"
            className="bg-lemon h-fit w-fit block p-2.5 rounded-full"
            aria-label="Instagram link"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="bg-lemon h-fit w-fit block p-2.5 rounded-full"
            aria-label="Facebook link"
          >
            <FaFacebook />
          </Link>
          <Link
            to="#"
            className="bg-lemon h-fit w-fit block p-2.5 rounded-full"
            aria-label="Twitter link"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

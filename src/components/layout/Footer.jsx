import { FaArrowRight, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="grid gap-y-5 lg:grid-cols-2  m-5">
      <div className="py-4">
        <p className="uppercase font-bold text-2xl pb-3">
          health<span className="text-tlgreen">sync</span>
        </p>
        <p className="text-lightblack mr-3 sm:mr-16">
          We&#39;re dedicated to helping you achieve yout health goals,
          providing you with the tools, support
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-y-5 sm:gap-y-0 sm:grid-cols-5">
        <div className="grid gap-1">
          <h1 className="text-btblack  text-lg font-bold capitalize">about</h1>
          <NavLink>our journey</NavLink>
          <NavLink>our team</NavLink>
          <NavLink>textimonial</NavLink>
        </div>

        <div className="grid gap-y-1">
          <h1 className="text-btblack font-bold capitalize">our product</h1>
          <NavLink>products</NavLink>
          <NavLink>method</NavLink>
          <NavLink>price</NavLink>
        </div>
        <div className="grid">
          <h1 className="text-btblack font-bold capitalize">Services</h1>
          <NavLink>offerings</NavLink>
          <NavLink>process</NavLink>
          <NavLink>case studies</NavLink>
        </div>

        <div className="grid">
          <h1 className="text-btblack font-bold capitalize">offer</h1>
          <NavLink>discount</NavLink>
          <NavLink>packaging</NavLink>
          <NavLink>rewards</NavLink>
        </div>

        <div className="grid ">
          <h1 className="text-btblack font-bold capitalize">contact us</h1>
          <NavLink>infomations</NavLink>
          <NavLink>contact form</NavLink>
          <NavLink>relation map</NavLink>
        </div>
      </div>
      <div className="grid  sm:grid-cols-2  mx-auto space-x-5 lg:mx-0">
        <div className="">
          <button type="button" className='py-3 px-10  bg-btblack h-fit text-bgray capitalize font-bold rounded-3xl'>join us now</button>
          <button className='p-3 bg-tlgreen rounded-full h-fit w-fit -ml-2 mt-0.5'>
            <FaArrowRight />
          </button>
        </div>
        <div className="flex gap-8 py-2">
          <NavLink className="bg-tlgreen h-fit w-fit block p-2.5 rounded-full"><FaInstagram /></NavLink>
          <NavLink className="bg-tlgreen h-fit w-fit block p-2.5 rounded-full"><FaFacebook /></NavLink>
          <NavLink className="bg-tlgreen h-fit w-fit block p-2.5 rounded-full"><FaTwitter /></NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

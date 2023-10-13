import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const AuthLayout = () => {
  return (
    <div className="flex flex-col-reverse mx-0 my-auto md:flex-row lg:flex-row justify-between items-center relative">
      <div className="absolute w-[50%] h-[50%] md:w-[60%] md:h-[60%] lg:w-[47%] lg:h-[47%] bg-[#CDFB47] rounded-b-full -top-10 -left-[24%] md:-top-[34%] md:-left-[24%] lg:-top-10 lg:-left-[24%]"></div>
      <span
        className="hidden lg:flex absolute lg:w-[50%] lg:h-[55%] bg-[#CDFB47] rounded-t-full -bottom-4 -right-[24%]"
        aria-hidden
      ></span>
      <main className="w-[100%] md:w-[50%] lg:w-[50%]">
        <Navbar />
        <Outlet />
      </main>
      <aside className="w-[100%] md:w-[50%] lg:w-[50%] mr-5 mt-5">
        <img
          className="hidden md:flex lg:flex w-full object-cover h-[92vh] rounded-2xl relative z-50"
          src="/assets/main/img8.jpg"
          alt="A fit man"
        ></img>
      </aside>
    </div>
  );
};

export default AuthLayout;

import { useRef } from "react";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { AiFillPauseCircle } from "react-icons/ai";
import vid from "/assets/healthSync-intro-vid.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const Hero = () => {
  let heroText = "your health, our app".split(""); //text to be animated

  gsap.registerPlugin(ScrollTrigger);
  let tl = useRef();
  let heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".heroText", {
          top: 8,
          opacity: 1,
          duration: 0.2,
          stagger: 0.1,
          ease: "power1.out",
          delay: 0.2,
        })
        .to(".heroPText", {
          opacity: 1,
          duration: 0.2,
          delay: 0.1,
        })
        .to(".download", {
          opacity: 1,
          duration: 0.3,
          delay: 0.1,
          bottom: 10,
          ease: "power1.out",
        })
        .to(".vid", {
          opacity: 1,
          right: 2,
          duration: 0.5,
          ease: "power1.out",
          delay: 0.1,
        })
        .to(".joinUs", {
          opacity: 1,
          left: 10,
          duration: 0.7,
          ease: "bounce.out",
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const vidRef = useRef(null);

  const playVid = () => {
    if (vidRef.current) {
      vidRef.current.play();
    }
  };
  const pauseVid = () => {
    if (vidRef.current) {
      vidRef.current.pause();
    }
  };

  return (
    <div ref={heroRef} className="grid md:grid-cols-2 gap-4  pt-6">
      <div>
        <p className="w-4/5 text-black font-bold capitalize sl:w-4/5 text-2xl sm:text-4xl md:text-6xl lg:text-7xl md:w-full xl:w-3/4">
          {heroText.map((txt, index) => (
            <span
              translate="yes"
              className="heroText relative bottom-0 opacity-0 w-4/5 text-black font-bold capitalize sl:w-4/5 text-2xl sm:text-4xl md:text-6xl lg:text-7xl md:w-full xl:w-3/4"
              key={index}
            >
              {txt}
            </span>
          ))}
        </p>
        <p className="heroPText opacity-0 my-5 text-sm lg:text-[15px] text-btblack ">
          We are dedicated to helping you achieve your health goals{" "}
          <span>
            providing you with the tools, support and resources you need to lead
            a healthier, happier life.
          </span>
        </p>
        <div className="flex joinUs relative opacity-0">
          <button
            type="button"
            className="py-3 px-10 bg-btblack text-bgray capitalize font-bold rounded-3xl"
          >
            join us now
          </button>
          <button
            aria-label="Join link"
            role="button"
            className="p-4 bg-tlgreen rounded-full w-fit -ml-2 mt-0.5"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="download relative opacity-0 bg-btblack text-bgray mt-16 rounded-3xl lg:w-[75%]">
          <div className="sm:flex gap-x-5 p-5 ">
            <img
              src={"/scan.png"}
              alt=""
              className="w-14 h-full bg-bgray mx-auto md:mx-0 mb-3 sm:mb-0"
            />
            <div className="flex justify-center text-center lg:text-left">
              <div>
                <p className="mx-2 sm:mx-20 md:mx-0 text-xl">Downlod our app</p>
                <p className="font-normal w-[80%] mt-2 text-sm mx-auto md:mx-0">
                  Scan code, get four month access to our website for free
                </p>
              </div>
              <button className="hidden lg:block p-4 bg-tlgreen rounded-full h-fit w-fit -ml-2 mt-0.5">
                <FaArrowRight color="black" />
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 p-5 text-center sm:text-left font-bold">
            <p>
              200k <span className="block font-normal">connected users</span>
            </p>
            <p>
              {" "}
              120 <span className="block font-normal">skilled training</span>
            </p>
            <p className="flex space-x-2 sm:-space-x-2 mx-auto  md:mx-0.5 mt-4 sm:mt-0">
              <img src={"/user.png"} alt="" className="w-10 h-10" />
              <img src={"/user.png"} alt="" className="w-10 h-10" />
              <img src={"/user.png"} alt="" className="w-10 h-10" />
            </p>
          </div>
        </div>
      </div>

      <div className="vid text-center opacity-0 relative">
        <div className="sg:flex bg-tlgreen rounded-2xl my-2">
          <img src={"/iphone.png"} alt="" className="sg:w-44 sg:h-44 -mr-10" />
          <div className="text-btblack bg-tlgreen mt-5">
            <p className="p-5 font-semibold w-3/4 mx-auto">
              Our App is available on IOS and Android
            </p>
            <div className="flex  font-bold capitalize w-3/4 mx-auto gap-x-5 px-5 py-5 sg:py-0">
              <p className="mt-2">check it out </p>
              <p className="p-4 bg-btblack text-bgray rounded-full h-fit w-fit ">
                <FaArrowRight />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-darkgray px-8 pt-6 my-5  rounded-[20px] font-bold flex justify-center xl:justify-end items-center">
          <div>
            <video
              ref={vidRef}
              width="420"
              height="340"
              className="rounded-lg mx-auto"
            >
              <source src={vid} type="video/mp4" />
            </video>
            <div className="flex gap-6 mx-auto w-[70%]">
              <button
                className="flex items-center justify-center capitalize gap-x-2"
                onClick={playVid}
              >
                <FaPlayCircle className="text-tlgreen bg-btblack rounded-full mt-1.5" />
                <span className="text-[12px] lg:text-lg mt-1">play video</span>
              </button>
              <button
                onClick={pauseVid}
                className="flex items-center justify-center capitalize gap-x-2"
              >
                <AiFillPauseCircle className="text-tlgreen bg-btblack rounded-full mt-1.5" />
                <span className="text-[12px] mt-1 lg:text-lg">pause</span>
              </button>
            </div>
            <p className="text-lg py-2">30+ home workout video collections</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

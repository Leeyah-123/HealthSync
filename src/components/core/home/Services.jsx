import { useLayoutEffect } from "react";
import { services } from "../../../utils/constants";
import {gsap} from "gsap"
import { animateCards } from "../../../utils/gsapUtils";
import { useRef } from "react";


const Services = () => {
  let servicesRef = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateCards(".services")
    }, servicesRef)

    return () => ctx.revert()

  }, [])

  return (
    <section ref={servicesRef}>
      <div className="grid sl:grid-cols-2 sl:gap-x-5 gap-5 sl:gap-0 text-center sl:text-left">
        <p className="capitalize font-bold text-2xl mx-10 sl:mx-0 lg:mx-8  sg:mt-2 sg:text-4xl md:text-5xl ">
          catalog of Services <span>through our app</span>
        </p>
        <p className="text-lg text-lightblack">
          Our app provides a comprehensive catalog of services that cater to a
          wide range of needs, all accessible at your fingertips. With our app,
          you&apos;re not just downloading a piece of software; you&apos;re
          unlocking a world of convenience and possibilities{" "}
        </p>
      </div>
      <div className="my-10 sl:my-20 grid gap-10 text-center sl:grid-cols-3 sl:gap-8 sl:text-left">
        {services.map((service) => (
          <div key={service.id} className="services opacity-0 relative bottom-[40px]">
            <img
              src={service.image}
              alt={`${service.title} image`}
              loading="lazy"
              className={`bg-${service.color} rounded-2xl `}
            />
            <p className="capitalize font-bold text-2xl my-4">
              {service.title}
            </p>
            <p className="text-lightblack">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

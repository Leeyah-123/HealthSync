import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateCards = (element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      toggleAction: "restart none none none",
      start: "top center",
    },
    opacity: 1,
    top: 10,
    duration: 0.5,
    ease: "power1.out",
    stagger: 0.15,
  });
};

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { infos } from '../../../utils/constants/static.constants';
import woman from '/assets/woman2.png';

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  const countUpRef = useRef(null);
  const numRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.woman', {
        top: '10%',
        opacity: 1,
        duration: 0.7,
        delay: 1,
        ease: 'power1.out',
      });
      gsap.to('.countUp', {
        scrollTrigger: {
          trigger: '.countUp',
          toggleActions: 'restart none none none',
        },
        opacity: 1,
        duration: 0.5,
        top: 100,
        ease: 'power1.out',
        delay: 0.1,
      });
    }, countUpRef);

    return () => ctx.revert(); //cleanup
  }, []);

  return (
    <>
      <div ref={countUpRef}>
        <div className="woman hidden xl:block opacity-0 absolute  right-[40%] ">
          <img src={woman} alt="healthy woman image" />
        </div>
        <div className="countUp opacity-0 bg-btblack  rounded-[20px] lg:rounded-[80px] py-10 px-8 grid md:grid-cols-2 xl:grid-cols-4 text-center gap-6 xl:px-8">
          {infos.map((info) => (
            <div className="space-y-3 " key={info.id}>
              <p className="text-4xl count-up md:text-5xl text-bgray">
                {
                  <CountUp
                    ref={numRef}
                    start={0}
                    end={info.amount}
                    duration={5.75}
                    useEasing={true}
                  />
                }
                {info.unit && info.unit}
              </p>
              <p className="text-slate-200 px-2">{info.service}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;

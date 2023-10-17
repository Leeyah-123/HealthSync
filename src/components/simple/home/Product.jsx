import { FaArrowRight } from "react-icons/fa";
import { products } from "../../../utils/constants";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import { animateCards } from "../../../utils/gsapUtils";

const Product = () => {
  let productRef = useRef()

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      animateCards(".product")
    }, productRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={productRef}>
      <div className="grid sl:grid-cols-2 sl:gap-x-5 gap-5 sl:gap-0 text-center sl:text-left">
        <p className="capitalize font-bold text-2xl mx-10 sl:mx-0 lg:mx-8  sg:mt-2 sg:text-3xl lg:text-5xl ">
          our health Product pricing plan <span>through our app</span>
        </p>
        <p className="text-lg text-lightblack">
          Our app presents a comprehensive catalog of services that cater to a
          wide range of nessd, all accessible to your fingertips, With our app,
          you&#39;re not just downloading a piece of software;you&#39;re
          unlocking a world of convenience and possibilities.{" "}
        </p>
      </div>
      <div className="my-10 md:my-20 grid gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
        {products.map((product) => (
          <div key={product.id} className="product opacity-0 relative bottom-[40px] bg-lightGray rounded-3xl">
            <p className="bg-tlgreen w-fit h-fit m-5 rounded-full py-3 ml-2 px-4 text-2xl font-bold">
              0{product.id}
            </p>
            <p className="mt-14 font-bold uppercase text-2xl md:text-right px-4">
              {product.time}
            </p>
            <p className="text-lg mx-2  sm:px-20 md:px-2">{product.text}</p>
            <article className=" py-10 bg-btblack text-bgray rounded-b-2xl font-bold flex justify-around md:py-5 mt-5">
              <div className="gap-y-0.5 grid">
                <p className="text-sm text-slate-200 ">Price start from</p>
                <p className="text-lg ">${product.price}.00</p>
              </div>
              <p className="bg-tlgreen rounded-full h-fit p-3 mt-1.5 text-btblack">
                <FaArrowRight />
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;

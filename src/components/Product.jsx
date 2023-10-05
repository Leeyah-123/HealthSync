import { useState } from "react"
import { FaArrowRight } from 'react-icons/fa'
const Product = () => {
    const [product, setpro] = useState({
        period: ['1 day pass', '1 week pass', '1 month pass'],
        text: [
            'With this tracking package, you can access real-time data on website traffic for a day',
            'With this tracking package, you can access real-time data on website traffic for a week',
            'With this tracking package, you can access real-time data on website traffic for a Month'
        ],
        price: [0, 30, 80]
    })
    return (
        <section>
            <main className="grid sl:grid-cols-2 sl:gap-x-5 gap-5 sl:gap-0 text-center sl:text-left">
                <p className="capitalize font-bold text-2xl mx-10 sl:mx-0 lg:mx-8  sg:mt-2 sg:text-3xl lg:text-5xl ">our health Product pricing plan <span>through our app</span></p>
                <p className="text-lg text-lightblack">Our app presents a comprehensive catalog of services that cater to a wide range of nessd, all accessible to your fingertips, With our app, you're not just downloading a piece of software;you're unlocking a world of convenience and possibilities.  </p>
            </main>
            <aside className="my-10 md:my-20 grid gap-10 text-center md:grid-cols-3 md:gap-3 md:text-left">
                {product.period.map((time, index) => (
                    <div key={index} className="bg-lightGray rounded-3xl">
                        <p className="bg-tlgreen w-fit h-fit m-5 rounded-full py-3 ml-2 px-4 text-2xl font-bold">0{index + 1}</p>
                        <p className="mt-14 font-bold uppercase text-2xl md:text-right px-4">{time}</p>
                        <p className="text-lg px-2  sm:px-20 md:px-2">{product.text[index]}</p>
                        <article className=" py-10 bg-btblack text-bgray rounded-b-2xl font-bold flex justify-around md:py-5 mt-5">
                            <div className="gap-y-0.5 grid">
                                <p className="text-sm text-lightblack ">Price start from</p>
                                <p className="text-lg ">${product.price[index]}.00</p>
                            </div>
                            <p className="bg-tlgreen rounded-full h-fit p-3 mt-1.5 text-btblack"><FaArrowRight /></p>
                        </article>
                    </div>
                ))}
            </aside>
        </section>
    )
}

export default Product
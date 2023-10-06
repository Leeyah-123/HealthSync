import { FaArrowRight, FaExternalLinkAlt, FaBookOpen, FaCompactDisc, FaArrowLeft } from 'react-icons/fa';

const Features = () => {

    return (
        <section className='my-12 md:my-20'>
            <div className='grid sg:grid-cols-2 sg:gap-x-5'>
                <p className='capitalize font-bold text-2xl w-3/4 sg:w-4/5  sg:mt-2 sg:text-4xl md:text-5xl '>best Features we offer to you </p>
                <div className="">
                    <p className='my-5  md:text-xl text-btblack'>We are dedicated to helping you achieve your health goals, providing you with the tools, support and resources.</p>
                    <div className='flex justify-around'>
                        <button className='  w-fit h-fit p-1.5 mt-2 rounded-full border-2 border-black'>
                            <FaArrowLeft className='rounded-full bg-tlgreen p-2 w-14 h-14' />
                        </button>
                        <button className='  w-fit p-4 rounded-full border-2 border-black'>
                            <FaArrowRight className='rounded-full bg-tlgreen p-2 w-14 h-14' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 md:gap-8 '>
                <div className="feature ">
                    <FaExternalLinkAlt className='relative  left-3/4 mb-2 text-5xl text-lightblack' />
                    <h1>tracking</h1>
                    <p >with our tracking Feature, you can access real-time data on website traffic, conversations, click-through rates, and more. You can monitor campign.</p>
                </div>
                <div className="feature">
                    <FaBookOpen className='relative left-3/4  mb-1 text-5xl text-lightblack' />
                    <h1>Insight</h1>
                    <p>with our tracking Feature, you can access real-time data on website traffic, conversations, click-through rates, and more. You can monitor campign.</p>
                </div>
                <div className="feature text-tlgreen">
                    <FaCompactDisc className='relative left-3/4  mb-2 text-5xl' />
                    <h1 >real time</h1>
                    <p >with our tracking Feature, you can access real-time data on website traffic, conversations, click-through rates, and more. You can monitor campign.</p>
                    <button type="button " className='relative rounded-2xl px-8 py-4 font-bold text-xl top-14 capitalize bg-tlgreen text-lightblack'>discover more</button>
                </div>
            </div>
        </section>
    )
}

export default Features
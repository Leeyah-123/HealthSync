import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import scan from './Assets/Scan.png'
import user from './Assets/user.png'
import phone from './Assets/iphone.png'
import download from './Assets/types.png'


const Header = () => {
  return (
    <header className='grid md:grid-cols-2 mt-4  md:mt-14'>
      <section >
        <p className='w-4/5 text-black font-bold capitalize sl:w-4/5 text-2xl sm:text-4xl md:text-6xl lg:text-7xl md:w-full xl:w-3/4'>your health, our app</p>
        <p className='my-5 text-sm text-btblack'>We are dedicated to helping you achieve your health goals <span>
          providing you with the tools, support and resources you need to lead a healthier, happier life.
        </span></p>
        <div className="flex">
          <button type="button" className='py-3 px-10 bg-btblack text-bgray capitalize font-bold rounded-3xl'>join us now</button>
          <p className='p-4 bg-tlgreen rounded-full w-fit -ml-2 mt-0.5'>
            <FaArrowRight />
          </p>
        </div>
        <div className='bg-btblack text-bgray mt-16 rounded-3xl '>
          <aside className='sm:flex gap-x-5 p-5 ' >

            <img src={scan} alt="" className='w-14 h-14 bg-bgray mx-auto md:mx-0 mb-3 sm:mb-0' />
            <div className="flex">
              <p className='mx-2 sm:mx-20 md:mx-0'>Downlod our app Scan code, get four month access to our website for free</p>
              <p className='p-4 bg-tlgreen rounded-full h-fit w-fit -ml-2 mt-0.5'>
                <FaArrowRight />
              </p>
            </div>
          </aside>
          <aside className='grid sm:grid-cols-3 p-5 text-center sm:text-left font-bold'>
            <p>200k <span className='block '>connected users</span></p>
            <p> 120 <span className='block'>skilled training</span></p>
            <p className='flex space-x-2 sm:-space-x-2 mx-auto  md:mx-0.5 mt-4 sm:mt-0'>
              <img src={user} alt="" className='w-10 h-10' />
              <img src={user} alt="" className='w-10 h-10' />
              <img src={user} alt="" className='w-10 h-10' />
            </p>
          </aside>

        </div>
      </section>
      <section className='text-center '>
        <main className='sg:flex bg-tlgreen rounded-2xl my-2'>
          <img src={phone} alt="" className='sg:w-44 sg:h-44 -mr-10' />
          <div className='text-btblack bg-tlgreen mt-5'>
            <p className=' p-5 font-semibold w-3/4 mx-auto'>Our App is available on IOS and Android</p>
            <div className="flex  font-bold capitalize w-3/4 mx-auto gap-x-5 px-5 py-5 sg:py-0">
              <p className='mt-2'>check it out </p>
              <p className='p-4 bg-btblack text-bgray rounded-full h-fit w-fit '>
                <FaArrowRight />  </p>
            </div>
          </div>
        </main>
        <section className="bg-darkgray p-5 my-5 rounded-lg font-bold ">
          <img src={download} alt="" className='my-3' />
          <aside>
            <div className='flex justify-center capitalize gap-x-2 text-xl'>
              <FaPlayCircle className='text-tlgreen bg-btblack rounded-full mt-1.5' />
              <p>play video</p>
            </div>
            <p className='text-lg py-2'>30+ home workout video collections</p>
          </aside>
        </section>
      </section>
    </header>
  )
}

export default Header

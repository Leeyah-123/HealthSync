import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm'

const Signin = () => {
  return (
    <div className='duration-300 p-4'>
        <div className='flex flex-col items-center text-center p-1'>

          <div className='relative'>

            <h1 className='font-mono text-[1.5rem] relative z-50'>
              Signin
            </h1>
            <div className='bg-[#CDFB47] rounded-full w-5 h-5 absolute top-0 -left-2'></div>

          </div>

          <p className='text-[.9rem] text-gray-400 pt-[.4em] tracking-wider'>
            Welcome back! Please enter your details
          </p>

        </div>

        <SigninForm/>
        
    </div>
  )
}

export default Signin

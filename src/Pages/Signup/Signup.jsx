import React from 'react'
import SignupForm from '../../Components/SignupForm/SignupForm'

const Signup = () => {
  return (
    <div className='duration-300 max-w-[900px] mx-0 my-auto '>
        <div className='flex flex-col items-center text-center p-1'>

          <div className='relative'>

            <h1 className='font-mono text-[1.5rem] relative z-50'>
              Signup
            </h1>

            <div className='bg-[#CDFB47] rounded-full w-5 h-5 absolute top-0 -left-2'></div>

          </div>
          <p className='text-[.9rem] text-gray-400 pt-[.4em] tracking-wider relative z-50'>
            Welcome to HealthSync! Please enter your details
          </p>
        </div>

        <SignupForm/>

    </div>
  )
}

export default Signup

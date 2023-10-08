import React from 'react'
import SignupInputField from '../SignupInputField/SignupInputField'

const SignupForm = () => {
  return (
    
      <form className='w-full md:w-[70%] lg:w-[75%] h-full my-4 mx-auto'>

        <div className='flex flex-col md:flex-col lg:flex-row'>

          <SignupInputField placeholder="John Doe" label="Full-Name:"/> 

          <SignupInputField placeholder="johndoe@gmail.com" label="E-mail Address:"/>
          
        </div>

        <div className='flex flex-col md:flex-col lg:flex-row'>

          <SignupInputField placeholder="Your Password goes here" label="Password:"/>

          <SignupInputField placeholder="Re-type your password" label="Confirm Password:"/>

        </div>

          <SignupInputField placeholder="Male" label="Sex:"/>


        <div className='mx-auto mt-5'>
            <button className='w-full bg-[#CDFB47] py-3 rounded-lg font-mono'>Signup</button>
        </div>

      </form>
  )
}

export default SignupForm

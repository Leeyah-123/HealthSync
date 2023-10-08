import React, { useState } from 'react'
import SigninInputField from '../SigninInputField/SigninInputField'

const SigninForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })


    console.log(formData)

  return (

    <form className='w-full lg:w-[60%] h-full my-4 mx-auto'>

        <div className='flex flex-col'>
            <SigninInputField label="E-mail Address:" placeholder="johndoe@gmail.com"/>

            <SigninInputField label="Password:" placeholder="Your Password goes here"/>
        </div>
        <div className='mx-auto mt-7'>
            <button className='w-full bg-[#CDFB47] py-3 rounded-lg font-mono'>Signup</button>
        </div>

      </form>
  )
}

export default SigninForm

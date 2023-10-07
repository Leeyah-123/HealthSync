import React from 'react'

const Signin = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col items-center text-center p-1'>
          <div className='relative'>
            <h1 className='font-mono text-[1.5rem] relative z-50'>Signup</h1>
            <div className='bg-[#CDFB47] rounded-full w-5 h-5 absolute top-0 -left-2'></div>
          </div>
          <p className='text-[.9rem] text-gray-400 pt-[.4em] tracking-wider'>Welcome back! Please enter your details</p>
        </div>
      <form className='w-full h-full my-4 mx-auto'>

        <div className='flex flex-col md:flex-row lg:flex-row'>
          <div className='flex flex-col p-2'>
            <label className='text-left'>Full-Name:</label>
            <input className='w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider' type='text' placeholder='johndoe@gmail.com'></input>
          </div>
          <div className='flex flex-col p-2'>
            <label className='text-left'>Full-Name:</label>
            <input className='w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 font-mono tracking-wider' type='text' placeholder='johndoe@gmail.com'></input>
          </div>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row'>
          <div className='flex flex-col'>
            <label>Full-Name:</label>
            <input className='w-full' type='text' placeholder='johndoe@gmail.com'></input>
          </div>
          <div className='flex flex-col'>
            <label>Full-Name:</label>
            <input className='w-full' type='text' placeholder='johndoe@gmail.com'></input>
          </div>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row'>
          <div className='flex flex-col'>
            <label>Full-Name:</label>
            <input className='w-full' type='text' placeholder='johndoe@gmail.com'></input>
          </div>
          <div className='flex flex-col'>
            <label>Full-Name:</label>
            <input className='w-full' type='text' placeholder='johndoe@gmail.com'></input>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Signin

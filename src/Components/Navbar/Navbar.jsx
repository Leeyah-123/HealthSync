import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/assets/hSyncLogo.png'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between items-center list-none text-center'>
        <img className='w-12 h-12' src={logo} alt='HealthSync Logo'></img>
        <div className='inline-flex items-center'>
            <li className='mx-2 my-2 font-mono text-[.9rem] after:h-[3px] after:w-0 cursor-pointer after:flex after:bg-[#CDFB47] after:duration-300 hover:after:w-full'>
                <Link to='/signup'>Signup</Link>
            </li>
            <li className='mx-2 my-2 font-mono text-[.9rem] after:h-[3px] after:w-0 cursor-pointer after:flex after:bg-[#CDFB47] after:duration-300 hover:after:w-full'>
                <Link to='/signin'>Signin</Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar

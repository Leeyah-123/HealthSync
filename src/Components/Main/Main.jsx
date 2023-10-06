import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
        <div className='w-[100%] md:w-[50%] lg:w-[50%]'>
            <div>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/signin'>Signin</Link>
                </li>
            </div>

            <Outlet/>
        </div>
        <main className='w-[100%] md:w-[50%] lg:w-[50%]'>
            <img className='h-[60%]' src='/public/assets/main/img1.jpg' alt='Image'></img>
        </main>
    </div>
  )
}

export default Main

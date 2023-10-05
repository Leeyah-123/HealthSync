const Navbar = () => {
  return (

    <nav className='flex justify-around font-bold text-btblack py-5'>
      <p className="uppercase text-lg md:text-2xl mt-1">health<span className="text-tlgreen">sync</span></p>
      <main className=" gap-x-20 capitalize hidden md:flex">
        <div className='flex gap-x-8 mt-1.5'>
          <p>home</p>
          <p>about</p>
          <p>feature</p>
          <p>download</p>
          <p>pricing</p>
        </div>
        <button type='button' className="bg-btblack text-bgray px-6 py-2.5 rounded-3xl">
          contact us
        </button>
      </main>
    </nav>

  )
}

export default Navbar

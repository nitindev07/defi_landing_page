import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav]=useState(true)

  return (
    <>
    <div className='w-full bg-black relative h-[90px]'>
      <div className='max-w-[1240px] flex justify-between items-center px-4 h-full mx-auto'>
        <h1 className='font-bold text-3xl text-blue-400'>Company</h1>
        <div className='hidden md:flex gap-8 items-center'>
        <ul className='flex gap-8 font-semibold items-center text-white'>
          <li><a href="platform">Platform</a></li>
          <li><a href="developers">Developers</a></li>
          <li><a href="community">Community</a></li>
          <li><a href="platform">Platform</a></li>
        </ul>
        <button className='bg-gradient-to-tr text-white from-blue-700 rounded-full px-4 py-1 from-60% to-blue-200'>Use Defi</button>
        </div>
        {nav ? <AiOutlineMenu onClick={()=>setNav(!nav)} className='text-white md:hidden' size={25}/>:<AiOutlineClose onClick={()=>setNav(!nav)} className='text-white md:hidden' size={25}/>}
        
      </div>
      </div>
      {/* responsive menu */}
      <div onClick={()=>setNav(!nav)} className={`bg-black z-10 fixed text-white w-full duration-300 h-screen text-center ${nav ? 'left-[-100%]':'left-[0%]'}`}>
        <ul className='md:hidden flex flex-col gap-12 text-xl font-semibold p-9'>
          <li><a href="platform">Platform</a></li>
          <li><a href="developers">Developers</a></li>
          <li><a href="community">Community</a></li>
          <li><a href="platform">Platform</a></li>
        </ul>
        <button className='bg-gradient-to-tr from-blue-700 rounded-full mt-6 px-6 py-2 from-60% to-blue-200 text-2xl'>Use Defi</button>
      </div>
      </>
  )
}

export default Navbar

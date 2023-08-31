import React from 'react'
import subs from '../assets/subscribe.jpg'

const Contact = () => {
  return (
    
      <div className='md:h-[550px] h-[400px]  mx-auto text-white'>
      <img src={subs} className='object-cover w-full md:h-[550px] h-[400px]  absolute -z-10' alt="" />
        <div className='text-center flex flex-col items-center justify-center px-3 w-full h-full bg-black/80'>
        <h1 className='text-4xl font-bold '>Join Our Defi Community</h1>
        <div className='flex flex-col items-center sm:flex-row my-6 gap-5'>
            <input type="email" className='py-1 rounded-full px-4 text-black ' name="" placeholder='Enter Your Email' id="" />
            <button className='bg-gradient-to-tr text-white max-w-[200px] from-blue-700 rounded-full px-5 py-1 from-60% to-blue-200'>Sign up</button>
        </div>
        <div>
        <input type="checkbox" name="" id="" /> Yes, I agree to receive email communications from DeFI.
        </div>
        </div>
        
      </div>
    
  )
}

export default Contact

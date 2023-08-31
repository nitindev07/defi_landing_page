import React from 'react'
import bar from '../assets/terminal.png'

const Developer = () => {
  return (
    <div className='bg-black w-full'>
      <div className='max-w-[1240px] px-4 py-14 mx-auto text-white bg-black md:flex items-center gap-8'>
        <div>
            <h1 className='text-3xl font-bold py-2'>Superpowers for DEFI developers</h1>
            <p>
            Checkout the <span className="text-blue-500">documentation</span>, the <span className="text-blue-500">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div  className='flex justify-center lg:justify-end w-full py-16'>
            <img src={bar} className='shadow-cyan-500/50 shadow-lg max-w-[250px] lg:max-w-[400px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Developer

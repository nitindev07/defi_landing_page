import React from 'react'
import vdo from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[92vh]'>
      <video className='object-cover absolute -z-10 w-full h-full' src={vdo} autoPlay loop muted></video>
        <div className=' text-white flex flex-col items-center justify-center h-[90%] w-full px-4 text-center'>
            <h1 className='text-3xl md:text-4xl font-bold py-2'>Decentralized</h1>
            <h1 className='text-3xl md:text-4xl font-bold'><span className='text-blue-300 '>Trading</span> Protocol</h1>
            <p className='text-lg md:text-xl py-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
            <div>
                <button className='bg-gradient-to-tr from-blue-700 rounded-full px-5 py-1 from-60% m-2 text-white to-blue-200'>Use Defi</button>
                <button className='text-blue-400 border-2 rounded-full px-5 py-1 border-blue-400 m-2'>FAQ</button>
            </div>
        </div>
        <div className='text-center text-white text-2xl font-bold'>
        <p>Total Volume Secured: $42,104,783,662.47</p>
        </div>
    </div>
  )
}

export default Hero

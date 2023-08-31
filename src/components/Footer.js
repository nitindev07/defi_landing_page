import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-24'>
      <div className='max-w-[1240px] mx-auto bg-black grid md:grid-cols-5 grid-cols-2 gap-6 gap-y-10 px-4'>
            <div className='flex flex-col items-center text-center gap-4'>
                <h4 className='font-bold text-lg border-b-[3px] border-cyan-400 inline-flex'>Products</h4>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token Lists</li>
                    <li>Defi</li>
                </ul>
            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <h4 className='font-bold text-lg border-b-[3px] border-cyan-400 inline-flex'>Developers</h4>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token Lists</li>
                    <li>Defi</li>
                </ul>
            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <h4 className='font-bold text-lg border-b-[3px] border-cyan-400 inline-flex'>Governance</h4>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token Lists</li>
                    <li>Defi</li>
                </ul>
            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <h4 className='font-bold text-lg border-b-[3px] border-cyan-400 inline-flex'>Community</h4>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token Lists</li>
                    <li>Defi</li>
                </ul>
            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <h4 className='font-bold text-lg border-b-[3px] border-cyan-400 inline-flex'>About</h4>
                <ul className='flex flex-col gap-4 cursor-pointer'>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token Lists</li>
                    <li>Defi</li>
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer

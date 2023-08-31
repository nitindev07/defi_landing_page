import React from 'react'

const AboutCard = (props) => {
  return (
    
      <div className='border-2 rounded-2xl border-white px-4 sm:px-6  sm:py-8 py-6 hover:scale-110 duration-300'>
        <div className='bg-sky-400 inline-flex rounded-full p-3'>{props.icon}</div>
        <h3 className='sm:py-6 py-3 text-xl fint-bold'>{props.heading}</h3>
        <p className='text-md sm:text-lg'>{props.text}</p>
      </div>
    
  )
}

export default AboutCard

import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  return (
    <div name='home' className='  bg-slate-600 w-full h-screen'>
      <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className=' text-pink-200'>Hi my name is</p>
      <h1 className=' text-4xl sm:text-7xl font-bold text-gray-50'> My name</h1>
      <h2 className=' text-4xl sm:7xl font-bold '>I'm a full stack developer </h2>
      <p className=' py-4 max-w-[700px]'> i am a full stack developer  specializing in building responsive full-stack web application </p>
      <div>
     <button className=' group text-white border-2 my-2 flex items-center hover:bg-green-400 hover:border-green-600 '>
        view work
        <span className=' group-hover:rotate-90 duration-300'>
            <ArrowForwardIcon className=' ml-3'/></span>
     </button>

      </div>

      </div>
    </div>
  )
}

export default Home

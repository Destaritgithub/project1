import React from 'react';
import { Link } from 'react-scroll';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import profile from '../assets/profile3.jpeg';
import CV from '../assets/CV.pdf';

const Home = () => {
  return (
    <div name='home' className='  bg-slate-600 w-full h-screen flex'>
      <div className=' grid sm:flex sm:pl-20 md:pl-80 gap-6 pt-60 justify-start pl-20'>
        <div className='flex justify-start '>
          <div className=''>
            <p className=' text-pink-200'>Hello, I am</p>
            <h1 className=' text-2xl sm:text-4xl font-bold text-gray-50'>
              DESTA ALEMU
            </h1>
            <h2 className=' text-1xl sm:4xl font-bold text-pink-200 '>
              Full stack developer
            </h2>

            <div className='flex gap-6'>
              <a href={CV} download>
                <button className=' group text-white border-2 my-2 flex items-center hover:bg-black hover:border-green-600 '>
                  Download CV
                </button>
              </a>
              <button className=' group text-white border-2 my-2 flex items-center hover:bg-black first-letter:hover:border-green-600 '>
                <Link to='work' smooth={true} duration={500}>
                  view work
                </Link>
                <span className=' group-hover:rotate-90 duration-300'>
                  <ArrowForwardIcon className=' ml-3' />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img src={profile} alt='profile' className='w-60 h-60 mx-auto' />
      </div>
    </div>
  );
};

export default Home;

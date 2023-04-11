import React from 'react';

const About = () => {
  return (
    <div name='about' className=' w-full h-screen  bg-slate-600 text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className=' max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className=' sm:text-right pb-8 pl-4'>
            <p className=' text 4xl font-bold inline border-b-4 border-pink-600 '>
              About
            </p>
          </div>

          <div> </div>
        </div>
        <div className=' max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className=' text-4xl sm:text-right font-bold'>
            <p>Hi , i am nice to meet you </p>
          </div>

          <p>
            Build a React JS Portfolio Website using React & Tailwind CSS. I
            threw this together the other day and wanted to share it with you
            guys. Feel free to follow along and use this as your own portfolio
            website to get a job in tech or any other profession! Make sure you
            have some cool projects to throw in the
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

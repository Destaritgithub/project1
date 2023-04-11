import React from 'react';

function Work() {
  return (
    <div name='work' className=' bg-slate-600 w-full md:h-screen text-gray-50 '>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className=' py-6'>// check out some of my recent work</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className=' shadow-lg shadow-blue-800 group container rounded-md flex justify-center items-center mx-auto content-div '>
            <span></span>
            <div>
              <a href=''>
                <button></button>
              </a>
              <a href=''>
                <button></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

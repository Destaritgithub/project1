import React from 'react';
import myproject4 from '../assets/myproject4.png';
import GithubFinder from '../assets/GithubFinder.png';
import homemarket from '../assets/homemarket.png';
import supportDesk from '../assets/supportDesk.png';
import Mobile1 from '../assets/Mobile1.png';

function Work() {
  return (
    <div name='work' className=' bg-slate-600 w-full md:h-screen text-gray-50 '>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className=' text-lg py-6'>Lets Check out some of my recent work</p>
        </div>
        <div
          className=' grid 
        sm:grid-cols-2 md:grid-cols-3 gap-4'
        >
          <div
            style={{ backgroundImage: `url(${myproject4})` }}
            className=' shadow-lg shadow-blue-800 group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            <div className=' opacity-8 group-hover:opacity-100'>
              <span className=' text-2xl font-bold text-white  bg-black tracking-wider'>
                {' '}
                Jobify a job posting platform used by companies to post new job
                positions Using MERN Stack
              </span>

              <div className='pt-8 text-center'>
                <a href={myproject4}>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo
                  </button>
                </a>
                <a href='https://github.com/Destaritgithub/githubfinder'>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GithubFinder})` }}
            className=' shadow-lg shadow-blue-800 group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            <div className=' opacity-8 group-hover:opacity-100'>
              <span className='  text-2xl font-bold text-white bg-black tracking-wider'>
                {' '}
                GithubFinder is used to search for Github users' profiles with
                detailed status to evaluate how much work they have done on
                Github using the MERN stack.
              </span>

              <div className='pt-8 text-center'>
                <a href={GithubFinder}>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo
                  </button>
                </a>
                <a href='https://github.com/Destaritgithub/jobify'>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${homemarket})` }}
            className=' shadow-lg shadow-blue-800 group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            <div className=' opacity-8 group-hover:opacity-100'>
              <span className='  text-2xl font-bold text-white bg-black tracking-wider'>
                {' '}
                Home Market place platform is used for home holders to sell or
                rent using Firbase.
              </span>

              <div className='pt-8 text-center'>
                <a href='https://housemarket-three.vercel.app/'>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo
                  </button>
                </a>
                <a href='https://github.com/Destaritgithub/reactwithfirbase'>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${supportDesk})` }}
            className=' shadow-lg shadow-blue-800 group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            <div className=' opacity-8 group-hover:opacity-100'>
              <span className='  text-2xl font-bold text-white bg-black tracking-wider'>
                {' '}
                Support Desk that is used for buying, ordering Ticket with Lot's
                of Functionality MERN Stack
              </span>

              <div className='pt-8 text-center'>
                <a href={supportDesk}>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo
                  </button>
                </a>
                <a href='https://github.com/Destaritgithub/supportdesk'>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Mobile1})` }}
            className=' shadow-lg shadow-blue-800 group container rounded-md flex justify-center items-center mx-auto content-div '
          >
            <div className=' opacity-8 group-hover:opacity-100'>
              <span className='  text-2xl font-bold text-white bg-black tracking-wider'>
                {' '}
                Mobile App using Flutter
              </span>

              <div className='pt-8 text-center'>
                <a href={Mobile1}>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo
                  </button>
                </a>
                <a href='https://github.com/Destaritgithub/findwork'>
                  <button className=' text-center rounded-lg py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

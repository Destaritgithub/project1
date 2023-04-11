import React from 'react';

const Skills = () => {
  return (
    <div name='skill' className='bg-slate-600 '>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className=''>
          <p className=' text-4xl font-bold inline border-b-4 border-pink-900'>
            Experience
          </p>
          <p> // These are the technologies i have worked with </p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png'
              alt='HTML'
            />
            <p className=' my-4'>HTML</p>
          </div>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
              alt='CSS'
            />
            <p className=' my-4 font-bold'>CSS</p>
          </div>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
              alt='JAVA SCRIPT'
            />
            <p className=' my-4 font-bold'>Java Script</p>
          </div>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png'
              alt='REACT'
            />
            <p className=' my-4 font-bold'>React</p>
          </div>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
              alt='NODE JS'
            />
            <p className=' my-4 font-bold'>Node Js</p>
          </div>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png'
              alt='EXPRESS'
            />
            <p className=' my-4 font-bold'>Express Js</p>
          </div>
          <div className=' shadow-md shadow-black hover:scale-110 duration-500'>
            <img
              className=' w-20 mx-auto'
              src='https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript.png'
              alt='MONGODB'
            />
            <p className='my-4 font-bold'>Mongo DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

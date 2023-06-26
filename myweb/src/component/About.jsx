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
        <div className=' text-lg pl-10 pr-10 sm:pl-40 sm:pr-40'>
          <p>
            Hey there! My name is Desta,
            I am highly motivated and responsible full stack developer I
            specializes in MERN Stack for web and Flutter for mobile app
            development. I graduated from Bair Dar University with a degree in
            computer science and has been dedicated to honing my skills and
            staying up-to-date with the latest trends in the industry. As a
            developer, I am committed to delivering high-quality work and
            exceeding client expectations. I takes pride in my ability to work
            efficiently under pressure while maintaining a keen eye for detail.
            My passion for technology and problem-solving has made me a
            valuable asset to any project I takes on. i expertise in full
            stack development makes me a versatile and valuable member of any
            team, whether I am building robust web applications or creating
            seamless mobile experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

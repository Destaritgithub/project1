import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg';
import myresume from '../assets/myresume.docx';


const Navbar = () => {
  const [nav, setnav] = useState(false);
  const handlechange = () => setnav(!nav);

  return (
    <div className=' fixed w-full flex justify-between items-center px-4 bg-slate-600 text-gray-50'>
      <div>
        <Stack direction='row' spacing={2}>
          <Avatar alt='p' src={profile} />
        </Stack>
      </div>
      {/* menu */}
      <div className=''>
        <ul className=' hidden md:flex p-4 uppercase'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              about
            </Link>
          </li>
          <li>
            <Link to='skill' smooth={true} duration={500}>
              skill
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>
              experience
            </Link>
          </li>
          <li>
            {' '}
            <Link to='contact' smooth={true} duration={500}>
              contact me
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handlechange} className=' md:hidden z-10'>
        {!nav ? <MenuIcon /> : <CloseIcon />}
      </div>

      {/* mobile menu */}
      <div
        className={
          !nav
            ? 'hidden'
            : 'uppercase absolute top-10 left-0 w-full h-screen flex flex-col justify-center bg-slate-600'
        }
      >
        <ul>
          <li className=' py-6 text-xl'>
            <Link onClick={handlechange} to='home' smooth={true} duration={500}>
              home
            </Link>
          </li>
          <li className=' py-6 text-xl'>
            <Link
              onClick={handlechange}
              to='about'
              smooth={true}
              duration={500}
            >
              about
            </Link>
          </li>
          <li className=' py-6 text-xl'>
            <Link
              onClick={handlechange}
              to='skill'
              smooth={true}
              duration={500}
            >
              skill
            </Link>
          </li>
          <li className=' py-6 text-xl'>
            <Link onClick={handlechange} to='work' smooth={true} duration={500}>
              experience
            </Link>
          </li>
          <li className=' py-6 text-xl'>
            {' '}
            <Link
              onClick={handlechange}
              to='contact'
              smooth={true}
              duration={500}
            >
              contact me
            </Link>
          </li>
        </ul>
      </div>
      {/* social icon */}
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className=' uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-f
   text-gray-300'
              href='https://linkedin.com/in/desta-alemu-6b4120234'
            >
              linkid in
              <LinkedInIcon fontSize='large' />
            </a>
          </li>
          <li className=' bg-black uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-f
   text-gray-300'
              href='https://github.com/Destaritgithub'
            >
              {' '}
              GitHub
              <GitHubIcon fontSize='large' />
            </a>
          </li>

          <li className=' bg-red-400  uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-f
   text-gray-300'
              href='https://alexdesse0@gmail.com'
            >
              {' '}
              email
              <EmailIcon fontSize='large' />
            </a>
          </li>
          <li className=' bg-red-950 uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-f
   text-gray-300'
              href={myresume}
              download={myresume}
            >
              resume
              <PictureAsPdfIcon fontSize='large' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

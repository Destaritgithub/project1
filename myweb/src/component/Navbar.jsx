import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


const Navbar = () => {
    const [nav,setnav]=useState(false)
    const handlechange =()=>setnav(!nav)
    
  return (
    <div className=' fixed w-full flex justify-between items-center px-4 bg-slate-600 text-gray-950'>
        <div>
        <Stack direction="row" spacing={2}>
        <Avatar alt="p" src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />
    </Stack>
        </div>
        {/* menu */}
     <div className=''>
        <ul className=' hidden md:flex p-4 uppercase'>
         <li>home</li>
         <li>about</li>
         <li>exprience</li>
         <li> contact me</li>

        </ul>
     </div>
     
     <div onClick={handlechange} className=' md:hidden z-10'>
      {!nav?<MenuIcon/>:<CloseIcon/>}
     

     </div>
     
     {/* mobile menu */}
     <div className={!nav ?'hidden':'uppercase absolute top-10 left-0 w-full h-screen flex flex-col justify-center bg-slate-600'}>

     <ul>
         <li className=' py-6 text-xl'>home</li>
         <li className=' py-6 text-xl'>about</li>
         <li className=' py-6 text-xl'>exprience</li>
         <li className=' py-6 text-xl'> contact me</li>

        </ul>
     </div >
     {/* social icon */}
     <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>


     <ul>
<li className=' uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
  <a className='flex justify-between items-center w-f
   text-gray-300' href='/'> linkid in
  <LinkedInIcon fontSize='large' /></a>

</li>
<li className=' bg-black uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
  <a className='flex justify-between items-center w-f
   text-gray-300'href='/'> GitHub
  <GitHubIcon fontSize='large'/></a>

</li>

<li className=' bg-red-400  uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
  <a className='flex justify-between items-center w-f
   text-gray-300'href='/'> email
  <EmailIcon fontSize='large'/></a>

</li>
<li className=' bg-red-950 uppercase w-[160px] h-[75px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
  <a className='flex justify-between items-center w-f
   text-gray-300'href='/'> resume
  <PictureAsPdfIcon fontSize='large'/></a>

</li>



    </ul>
     </div>

    </div>
  )
}

export default Navbar

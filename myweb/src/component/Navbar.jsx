import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [nav,setnav]=useState(false)
    const handlechange =()=>setnav(!nav)
// 21:12
    
  return (
    <div className=' fixed w-full flex justify-between items-center px-4 bg-slate-200 text-gray-950'>
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
     {/*hamburg https://youtu.be/2kg0z1qNrkw */}
     <div className=' md:hidden z-10'>
     <MenuIcon/>

     </div>
     
     {/* mobile menu */}
     <div className=' hidden uppercase absolute top-0 left-0 w-full h-screen flex flex-col justify-center'>

     <ul>
         <li className=' py-6 text-xl'>home</li>
         <li className=' py-6 text-xl'>about</li>
         <li className=' py-6 text-xl'>exprience</li>
         <li className=' py-6 text-xl'> contact me</li>

        </ul>
     </div >
     {/* social icon */}
     <div className=' hidden'></div>
    </div>
  )
}

export default Navbar

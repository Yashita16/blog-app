import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
      <img 
     onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44' />

      <button onClick={()=>navigate('/admin')}
      className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-gray-800 transition cursor-pointer'>
        Login
        <img src={assets.arrow} alt="arrow" className='w-4 h-4' />
      </button>
    </div>
  )
}

export default Navbar

import React from 'react'
import Logo from '../../assets/Images/raitanlogo.png'

const Header: React.FC = () => {
  return (
    <div className='flex justify-between px-5 py-2 w-full md:mb-4 shadow-lg'>
        <img src={Logo} className='w-[60px]' alt="Logo" />
        <div className='h-full flex items-center'>More</div>
    </div>
  )
}

export default Header
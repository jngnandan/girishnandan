import React, { useState } from 'react';
import { Link } from "react-router-dom";

// import menu from '../assets/icons/menu.svg'
// import close from '../assets/icons/close.svg'
// import ssglogo from '../assets/images/ssglogo.png' 

import {HiMenu} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <div>
        <div className='shadow bg-black flex flex-row justify-between items-center h-16 px-6  lg:px-44 xl:px-60 font-medium text-sm'>
          <div className='' onClick={() => setNavbarOpen(true)}>
          <Link to='/'>
            <p className="text-lg font-light text-gray-200 ">Girish <span className="font-semibold">Nandan</span></p>
          </Link>
          </div>

          <div className='flex flex-row m-5 invisible  md:visible'>
            <Link to='/about'>
                <p className='mx-2 text-gray-200'>About</p>
            </Link>
          </div>

          {navbarOpen?
            <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex flex-col justify-center items-center sm:block md:hidden'>
            <HiMenu className='text-3xl text-gray-200' />
          </button>
          :
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex flex-col justify-center items-center sm:block md:hidden'>
            <IoMdClose className='text-3xl text-gray-200' />
          </button>
          }
        </div>

        {!navbarOpen &&
        <div className='px-6 font-medium text-sm pb-4 bg-red-700'>
          <Link to='/about' onClick={() => setNavbarOpen(!navbarOpen)}>
                <p className='py-3 text-white hover:text-black w-full'>About</p>
            </Link>
        </div>
        }
      </div>
  )
}
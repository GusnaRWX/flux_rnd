import React, { useState } from 'react'
import { FiChrome, FiArrowLeft, FiAlignJustify, FiX } from "react-icons/fi";
import { reactLogo } from '@/assets';
import Image from 'next/image';
import PropTypes from 'prop-types'


const menus = [
  {title: 'Report', icon: reactLogo },
  {title: 'Inventory', icon: reactLogo },
  {title: 'General Ledger', icon: reactLogo },
  {title: 'Accounting', icon: reactLogo },
]


function NavBar({children}) {
  const [open, setOpen] = useState(true)
  return (
   <div className='w-full h-screen bg-white text-black flex'>
    <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-500 h-screen bg-[#f9f9f9] relative overflow-auto`}>
      <div className='flex gap-x-4 items-center justify-center'>
        <h1 className={`text-[#ff6e00] origin-left font-medium text-3xl duration-300 ${!open && 'scale-0'}`}>
          SIMKO
        </h1>
      </div>
      <div className='mt-8 flex flex-col gap-4 relative overflow-auto'>
        {
          menus.map((menu, index) => (
            <div key={index} className={`flex items-center text-sm gap-4 font-medium p-2 text-black hover:bg-[#ff6e00] rounded-md cursor-pointer`}>
              <Image src={menu?.icon} alt={menu.title} className='h-6 w-6'/>
              <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-0 overflow-hidden'}`}>{menu.title}</span>
            </div>
          ))
        }
      </div>
    </div>
    <main className='flex-col flex-1 bg-[#f1f1f1]'>
        <nav className='w-full h-14 bg-white'>
          <div className='pt-3 flex flex-row items-center justify-between'>
            <div className='flex items-center justify-start gap-4 pl-4'>
            {
              open && (
                <FiX
                 className='h-6 w-6 cursor-pointer text-[#ff6e00]'
                 onClick={() => setOpen(!open)}
                />
              )
            }
            {
              !open && (
                <FiAlignJustify
                 className='h-6 w-6 cursor-pointer text-[#ff6e00]'
                 onClick={() => setOpen(!open)}
                />
              )
            }
            <h4 className='text-[#ff6e00] font-bold'>DASHBOARD</h4>
          </div>
          <div className='flex gap-4'>
            <p>Branch: -</p>
            <p>Outlet: -</p>
          </div>
          </div>
      </nav>
      <div className='overflow-scroll h-screen'>
        <div className='p-4 overflow-scroll'>
          {children}
        </div>
      </div>
    </main>
   </div>
  )
}

NavBar.propTypes = {
  children: PropTypes.node
}

export default NavBar
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

const Nav = () => {
    const [menu, setMenu] = useState(false);

  return (
    <main className=''>
        <nav className='w-[95%] lg:w-[85%] mx-auto flex justify-between items-center py-4 border-b-1 border-slate-600 px-5'>
            <div>
                <h1 className='text-2xl font-medium '>DevDarbo</h1>
            </div>
            <ul className='hidden md:flex gap-10'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            <div>
            <a href="">
                    <FaGithub size={'33'} />
                </a>
            </div>
            </ul>

            <div className='md:hidden flex gap-2'>
                
                <button onClick={() => setMenu(prev => !prev)}>
                    {menu ? <IoCloseSharp size={'30'} /> : <MdMenuOpen size={'30'} />}
                </button>
            <div className='flex'>
                
                <div>
                {menu && (
                    <div className='absolute top-[9%] right-0 bg-slate-800 text-white w-full'>
                       <ul className='flex flex-col justify-center items-center p-4 gap-5 '>
                        <li>
                            <a href="" className='hover:bg-slate-900 opacity-80 py-1 px-4 rounded-md'>Home</a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-900 opacity-80 py-1 px-4 rounded-md'>About</a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-900 opacity-80 py-1 px-4 rounded-md'>Projects</a>
                        </li>
                        <li>
                            <a href="" className='hover:bg-slate-900 opacity-80 py-1 px-4 rounded-md'>Contact</a>
                        </li>
                       </ul>
                    </div>
                )}
                </div>
            </div>
            </div>

           
           
        </nav>
    </main>
  )
}

export default Nav
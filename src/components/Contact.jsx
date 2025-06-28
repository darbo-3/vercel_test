import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center w-screen backdrop-blur-md bg-black/30 z-50'>
        <form className='w-3/4 sm:w-2/4 h-5/6 bg-slate-800 p-5 rounded-md shadow-lg flex flex-col gap-4 border-1 border-slate-700 opacity-80 backdrop-blur-md overflow-scroll'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-medium'>Contact</h1>
                <div>
                    <button>
                        <IoCloseSharp size={30} className='text-white mt-1  cursor-pointer' />
                    </button>
                </div>
            </div>
            <div>
                <label className='text-white text-md ml-1'>Name</label>
                <input type="text" className='w-full p-2 rounded-md bg-slate-700 text-white outline-none focus:ring-2 ring-sky-600' placeholder='Enter your name' />
            </div>
            <div>
                <label className='text-white text-md ml-1'>Email</label>
                <input type="email" className='w-full p-2 rounded-md bg-slate-700 text-white outline-none focus:ring-2 ring-sky-600' placeholder='Enter your email' />
            </div>
            <div>
                <label className='text-white text-md ml-1'>Message</label>
                <textarea className='w-full p-2 rounded-md bg-slate-700 text-white outline-none focus:ring-2 ring-sky-600' placeholder='Enter your message' rows="4"></textarea>
            </div>
            <button className='w-full p-2 bg-sky-600 opacity-90 cursor-pointer text-white rounded-md hover:bg-sky-700 transition duration-200'>Send Message</button>
            <div className='text-white text-sm text-center mt-2'>
                <p className='border-b-1 border-slate-600  pb-3 mx-auto text-xs w-fit md:text-lg'>Feel free to reach out for any queries or collaborations!</p>
            </div>
            <div className='text-white text-sm text-center mt-2'>
                <p>Or connect with me on social media!</p>
            </div>
            <div className='flex w-full justify-center gap-2'>
               <a href="">
               <FaFacebook size={30} className='text-blue-600 cursor-pointer mx-auto' />
               </a>
               <a href="">
                <BsInstagram size={30} className='text-pink-600 cursor-pointer mx-auto' />
               </a>
               <a href="">
                <FaGithub size={30} className='text-gray-300 cursor-pointer mx-auto' />
               </a>
            </div>

        </form>
    </div>
  )
}

export default Contact
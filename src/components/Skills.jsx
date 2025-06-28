import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div className='w-[85%] h-screen mx-auto border-t-1 border-slate-900'>
        <div className='mx-10 my-15'>
            <h1 className='text-4xl font-light'>My Skills</h1>
            <p className='text-lg mt-4'>I have a diverse skill set that includes:</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 p-4  rounded-md w-full md:w-fit mx-auto opacity-80 border-1 border-slate-700 shadow-2xl '>
                <div className='flex flex-col items-center gap-2'>
                    <FaHtml5  size={50} className='text-orange-600 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>HTML</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <IoLogoCss3  size={50} className='text-blue-600 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>CSS</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <IoLogoJavascript  size={50} className='text-yellow-500 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>JavaScript</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <RiTailwindCssFill  size={50} className='text-sky-400 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>Tailwind CSS</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <FaReact  size={50} className='text-blue-400 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>React</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <FaNodeJs  size={50} className='text-green-600 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>Node.js</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <SiMongodb  size={50} className='text-green-700 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <SiExpress  size={50} className='text-gray-600 hover:scale-125 cursor-pointer  transition-all duration-300  hover:brightness-110' />
                    <p className='text-lg'>Express.js</p>
                </div>
            </div>
            <div className='text-center mt-10'>
                <p className='text-md lg:text-lg'>I am always eager to learn new technologies and improve my skills.</p>
                </div>
        </div>
    </div>
  )
}

export default Skills
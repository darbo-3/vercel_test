import React from 'react'
import Me from '../components/me2.png'
import Contact from '../components/Contact';
import { useState } from 'react';
const Hero = () => {
    const [open, setOpen] = useState(false);
  return (
    <main className='container w-[85%] h-screen  mx-auto py-5 px-2'>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-8 mt-15'>
                <div>
                <h1 className='text-5xl font-light'>Welcome to DevDarbo</h1>
                <p className='text-lg'>Hi there! this is my portfolio, I'm Full Stack Web  Developer with 2 year experience.</p>
                </div>

                <div>
                    <button onClick={() => setOpen(true)} className='bg-gradient-to-r from-sky-500 via-sky-700 hover:scale-110 transition duration-300 cursor-pointer to-sky-800 hover:brightness-125 text-white px-5 py-2 rounded-md'>Contact Me</button>
                </div>
            </div>
            <div className=''>
                <img src={Me} alt="" />
            </div>
        </section>
        <div className='fixed'>
            {open && <Contact />}
        </div>
    </main>
  )
}

export default Hero
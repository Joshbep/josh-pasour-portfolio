import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id="about" className='w-full md:h-full p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#4F7942]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>I am software engineer a strong interest in coding, two years of web development experience in marketing teams, and the ability to quickly learn new technologies, I am well-equipped to transition from marketing and web development to a software engineering role.</p>
          <p className='py-2 text-gray-600'> In my current role, I have been able to build and optimize websites for clients, as well as create full-stack applications as a student. My ultimate goal is to continue to grow in this field and become a successful software engineer.</p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About

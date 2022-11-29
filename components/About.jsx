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
          <p className='py-2 text-gray-600'>I am a developing software engineer and I completed a Bootcamp at General Assembly. As someone who loves to constantly problem solve and continuously evolve their skillset, software engineering feels like a dream.</p>
          <p className='py-2 text-gray-600'>I worked in marketing before studying to become an engineer. The marketing industry taught me how to break larger problems into smaller chunks and to adapt and grow with each project. With $10,000,000+ spent in marketing with startups, I learned how to effectively manage my time. I also got to learn from and observe our web development team with every new client. The more time that passed by, the more I realized I had a burning passion for software development and that has led me here.</p>
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

import Link from 'next/link';
import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
  <div id="home" className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
        <p className='uppercase text-sm tracking-widest text-gray-600'> LET'S BUILD SOMETHING TOGETHER</p>
        <h1 className='py-4 text-gray-700'> Hi, I'm <span className='text-[#4F7942]'>Josh</span></h1>
        <h1 className='py-2 text-gray-700'> A Software Engineer</h1>
        <p className='py-4 text-gray-600 max-w-[70%] m-auto'> I am a software engineer with a strong interest in coding, two years of web development experience in marketing teams, and the ability to quickly learn new technologies, I am well-equipped to transition from marketing and web development to a software engineering role. In my current role, I have been able to build and optimize websites for clients, as well as create full-stack applications as a student. My ultimate goal is to continue to grow in this field and become a successful software engineer.</p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <a
            href='https://www.linkedin.com/in/joshua-pasour/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='flex items-center flex-col rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
              <span className="ml-2">Linkedin</span>
            </div>
          </a>
          <a
            href='https://github.com/Joshbep'
            target='_blank'
            rel='noreferrer'
          >
            <div className='flex items-center flex-col rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
              <span className="ml-2">Github</span>
            </div>
          </a>
          <Link href='/#contact'>
            <div className='flex items-center flex-col rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
              <span className="ml-2">Contact</span>
            </div>
          </Link>
          <a
            href='https://docs.google.com/document/d/1wwTaicujNUyt3zibZd2TWaMK6F5g7ntddZbuuEG1_Hs/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <div className='flex items-center flex-col rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
              <span className="ml-2">Resume</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main

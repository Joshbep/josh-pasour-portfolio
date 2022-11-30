import Image from 'next/image'
import React from 'react'
import HtmlImg from '../public/assets/skills/html.jpg'
import CssImg from '../public/assets/skills/css.jpg'
import JavascriptImg from '../public/assets/skills/javascript.jpg'
import ReactImg from '../public/assets/skills/react.jpg'
import ExpressImg from '../public/assets/skills/express.jpg'
import NodeImg from '../public/assets/skills/node.jpg'
import MongoImg from '../public/assets/skills/mongo.jpg'
import NextImg from '../public/assets/skills/nextjs.jpg'
import TailImg from '../public/assets/skills/tailwind.jpg'
import PythonImg from '../public/assets/skills/python.png'
import MySQLImg from '../public/assets/skills/MySQL.png'
import Postgresql from '../public/assets/skills/Postgresql.png'
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#4F7942]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={HtmlImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={CssImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={JavascriptImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={PythonImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PYTHON</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={MySQLImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Postgresql}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>POSTGRESQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ExpressImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NodeImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={MongoImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MONGO</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NextImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={TailImg}
                  width='64px'
                  height="64px"
                  alt='/'
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
